import api from "@/https/api";

export default{
    namespaced: true,
    state: {
        subjects: {}
    },
    mutations:{
        SETSUBJECTS(state,payload){
            state.subjects = Object.assign({},payload);
        }
    },
    actions:{
        async getSubjectsAsync({commit}){
            const data = await api.subject.getSubjcts();
            if(data.code){
                commit('SETSUBJECTS',data.data);
            }
            else{
                console.log(data.message);
            }
        }
    }
}