import axios from "axios";

export default{
    getSubjcts(params){
        return axios({
            url: '/subjects/getSubjects',
            method: 'GET',
            params
        })
    }
}