import axios from "axios";
//nous avons utilisé axios.get ou axios.post avec une URL d'un API endpoint pour obtenir une promesse qui renvoie un objet de réponse
//login url
const U_API_BASE_URL ="http://localhost:8081/login";
//voting url
const V_API_BASE_URL ="http://localhost:8081/voting";
//get result url 
const R_API_BASE_URL ="http://localhost:8081/Result";
class UserService{
   login(data){
    return axios.post(U_API_BASE_URL,data)
}
   vote(cond){
    return axios.post(V_API_BASE_URL,cond)
}
    getResult(){
    return axios.get(R_API_BASE_URL)
    }
}
export default new UserService();