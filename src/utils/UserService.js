import httpRequest from './requestInstance';

const {requestInstance} = httpRequest;

class UserService {
    static userLogin(data) {
        return requestInstance.post('/identity/login', data);
    }

    static userRegistration(data) {
        return requestInstance.post('/identity/registration', data);
    }

    static userInfo() {
        return requestInstance.get('/identity/userInfo');
    }
}

export default UserService