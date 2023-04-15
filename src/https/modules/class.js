import axios from "axios";

export default{
    getClassBySubjectId(params){
        return axios({
            url: '/classes/getClassesBySubjectsId',
            method: 'GET',
            params
        })
    }
}