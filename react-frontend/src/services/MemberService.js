import axios from 'axios';

const TRAINER_API_BASE_URL = "http://localhost:8082";

class MemberService {

    getMembers(){
        return axios.get(`${TRAINER_API_BASE_URL}/manage_member`);
    }
    getMemberById(trainerId){
        return axios.get(`${TRAINER_API_BASE_URL}` + '/' + trainerId);
    }
    setSubscription(id,session){
        return axios.post(`${TRAINER_API_BASE_URL}/subscribe/${id}/${session}`);
    }
    getGymPlanById(session){
        return axios.get(`${TRAINER_API_BASE_URL}/gym_plan/${session}`);
    }
    getMemberById(session){
        return axios.get(`${TRAINER_API_BASE_URL}/view_profile/${session}`);
    }
}

export default new MemberService()
