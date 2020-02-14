class JwtHelper {

  static get token() {
    return localStorage.getItem('token');
  }

  static saveToken(token) {
    localStorage.setItem('token', token);
  }

  static removeToken() {
    localStorage.removeItem('token');
  }
}

export default JwtHelper