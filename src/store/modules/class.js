import api from "@/https/api";

export default{
    namespaced: true,
    state: {
        classes:{

        }
        ,
        pageDate:{
            pageSize: 8
        }
    },
    mutations:{
        SETCLASSES(state,payload){
            state.classes = Object.assign({},payload);
        },
        SETPAGESIZE(state,payload){
            state.pageDate.pageSize = payload;
        }
    },
    actions:{
        async getClassBySubjectIdAsync({commit},payload){
            const data = await api.classes.getClassBySubjectId({subjectsId:payload});
            if(data.code){
              
                commit('SETCLASSES',data.data);
               
            }
            else{
                console.log(data.message);
            }
        }
    }
}