import axios from 'axios';

const Login_API_BASE_URL = "http://localhost:8082";

class LoginService {



    loginTrainer(login){
        return axios.post(`${Login_API_BASE_URL}/login`, login);
    }

    registerTrainer(trainer){
        return axios.post(`${Login_API_BASE_URL}/register`, trainer);
    }

}

export default new LoginService()
