import { Base64 } from 'js-base64';

class JwtHelper {
  static saveTokenToLS(token) {
    localStorage.setItem('token', token);
  }

  static removeToken() {
    localStorage.removeItem('token');
  }

  static get token() {
    return localStorage.getItem('token');
  }

  static get isTokenExist() {
    return !!localStorage.getItem('token');
  }

  static get tokenPayload() {
    const token = localStorage.getItem('token');

    return JSON.parse(Base64.decode(token.split('.')[1]));
  }

  static get tokenExpiredTime() {
    return this.tokenPayload.exp;
  }
}

export default JwtHelper