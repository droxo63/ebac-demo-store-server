import { group, sleep } from "k6";
import Login from "../request/login.request.js";
import Product from "../request/product.request.js";

export default function () {
  const login = new Login();
  const product = new Product();

  group("Realiza login e obtém token", () => {
    login.access("admin", "admin");
    const token = login.getToken();
    console.log("Token gerado:", token); 
  });


 

  group("Cria novo produto com sucesso", () => {
    const novoProduto = {
      name: "Produto Teste Automatizado",
      description: "Criado pelo script K6",
      itemPrice: 150.75,
    };

    const id = product.createProduct(token, novoProduto);
    
  });

  sleep(1);
}
