import api from '@/https/api'
export default {
    namespaced: true,
    state: {
        details: {

        }
    },
    mutations: {
        SETDETAILS(state,payload){
          
            state.details = Object.assign({},payload);
        }
    },
    actions: {
        async getUserInfoAsync({commit}) {
            const token = localStorage.token;
            const data = await api.user.getUserInfo(token);
            if (data.code) {
                commit('SETDETAILS',data.data);
            }
        }
    }
}