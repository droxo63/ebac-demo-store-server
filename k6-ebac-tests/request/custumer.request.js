import http from "k6/http";
import { check } from "k6";
import Utils from "../utils/utils.js";

export default class Customer {
  createCustomer(token, customerData) {
    const url = `${Utils.getBaseUrl()}/customers`;

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };

    const response = http.post(url, JSON.stringify(customerData), { headers });

    check(response, {
      "status is 201": (r) => r.status === 201,
      "resposta contém ID": (r) => !!r.json("id"),
    });

    console.log("Resposta :", response.status, response.body);

    return response;
  }
}
