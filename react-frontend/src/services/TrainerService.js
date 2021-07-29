import axios from 'axios';

const TRAINER_API_BASE_URL = "http://localhost:8082";

class TrainerService {

    getTrainer(){
        return axios.get(`${TRAINER_API_BASE_URL}/manage_trainer`);
    }
    getTrainerById(trainerId){
        return axios.get(`${TRAINER_API_BASE_URL}` + '/' + trainerId);
    }
}

export default new TrainerService()
