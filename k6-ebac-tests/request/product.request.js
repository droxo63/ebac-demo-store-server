import http from "k6/http";
import { check } from "k6";
import Utils from "../utils/utils.js";

export default class Product {
  createProduct(token, productData) {
    const url = `${Utils.getBaseUrl()}/api/products`;

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = http.post(url, JSON.stringify(productData), { headers });

    check(response, {
      "produto criado com sucesso (201)": (r) => r.status === 201,
    });

    const id = response.json("id");
    console.log(`🟢 Produto criado com ID: ${id}`);

    return id;
  }
}
