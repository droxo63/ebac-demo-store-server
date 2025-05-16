import { group, sleep, check } from "k6";
import Login from "../request/login.request.js";
import Customer from "../request/customer.request.js";

export default function () {
  const login = new Login();
  const customer = new Customer();

  group("Login e obtenção do token", () => {
    login.access("admin", "admin");

    const token = login.getToken();
    console.log("Token:", token);

    check(token, {
      "Token foi gerado com sucesso": (t) => t !== undefined && t !== "",
    });
  });

  group("Criar novo cliente", () => {
    const token = login.getToken();

    if (!token) {
      console.error("Token ausente. Login falhou.");
      return;
    }

    const customerData = {
      address: {
        id: "12345678-aaaa-bbbb-cccc-1234567890ab" // coloque um ID válido aqui
      },
      email: `cliente${Math.floor(Math.random() * 10000)}@teste.com`,
      firstName: "João",
      lastName: "Silva",
      phone: "11999999999"
    };

    customer.createCustomer(token, customerData);
  });

  sleep(1);
}