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
    user.list(login.getToken());
  });

  sleep(1);
}
