import http from "k6/http";
import { check } from "k6";
import Utils from "../utils/utils.js";

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '5s', target: 50 },
    { duration: '10s', target: 10 },
    { duration: '5s', target: 0 },
  ],
  thresholds: { // CORRIGIDO: era "thereshold"
    http_req_duration: ['p(95)<500'],
    http_reqs: ['count<1000'],
  },
};

export default class User {
  list(token) {
    let response = http.get(`${Utils.getBaseUrl()}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    check(response, {
      'listagem deve retornar 200': (r) => r && r.status === 200, // CORRIGIDO
    });

    return response;
  }
}
