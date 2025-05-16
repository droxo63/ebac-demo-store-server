import { group, sleep } from "k6";
import Login from "../request/login.request.js";
import User from "../request/user.request.js";
//import data from "..//data/usuarios.json";

export default function () {
  const login = new Login();
  let user = new User();

  group("Login and get token", () => {
    login.access("admin","admin");

  });

  group("List users", () => {
    const token = login.getToken();
    if (token) {
      user.list(token);
    } else {
      console.error("Erro: Token inválido. Login falhou.");
    }
  });

  sleep(1);
}
