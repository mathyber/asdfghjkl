import axios from 'axios';

class HttpRequest {
  constructor() {
    this.apiUrl = '/api';
    this.request = axios.create({
      baseURL: this.apiUrl,
      timeout: 5000,
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      },
      withCredentials: false,
    });
  }

  get requestInstance() {
    return this.request;
  }

  setTokenToHeaders(token) {
    this.request.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  static removeTokenFromHeaders() {
    this.request.defaults.headers.common.Authorization = null;
  }
}

const httpRequest = new HttpRequest();

export default httpRequest