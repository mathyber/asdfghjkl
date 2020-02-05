import { postman } from "../utils/postman"

export default function userLogin(loginData) {
    return postman.post('/identity/login', loginData);
}