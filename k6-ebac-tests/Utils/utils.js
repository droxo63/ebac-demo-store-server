import http from "k6/http"

export default class Utils {
  static getBaseUrl() {
    return `http://localhost:3000/api`;
  }
}

