import api from "@/https/api";

export default {
    namespaced: true,
    state: {
        //默认一次性加载十条数据
        pageDate: {
            pageSize: 8
        },
        students: {

        }
    },
    mutations: {
        SETSTUDENTS(state, payload) {
            state.students = Object.assign({}, payload);
        },
        SETPAGESIZE(state, payload) {
            state.pageDate.pageSize = payload;
        }
    },
    actions: {
        async getStudentsAsync(context, currentPage) {

            //当有currentPage传入的时候 发送请求的时候就添加上
            let data;
            if (!currentPage) {

                data = await api.student.getStudents(context.state.pageDate);
            }
            else {
                data = await api.student.getStudents({ ...context.state.pageDate, currentPage });
            }

            if (data.code) {
                context.commit('SETSTUDENTS', data.data);
            }
            else {
                console.log(data.message);
            }
        },
        async addSudentAsync(context, payload) {
            const data = await api.student.addStudent(payload);
            if (data.code) {
                // context.dispatch(getStudentsAsync);
                return 1;
            }
            else {
                console.log(data.message);
                return 0;
            }
        },
        async deleteStudentAsync({dispatch},_id){
            const data = await api.student.deleteStudent({_id});
            console.log(data);
            if(data.code){
                dispatch('getStudentsAsync');
                return 1;
            }else{
                console.log(data.message);
                return 0;
               
            }
        },
        async getStudentsByIdAsync(context,_id){
           const data = await api.student.getStudentsById({_id});
           return data.data; 
        },
        async editStudentAsync(context,payload){
            const data = await api.student.updatedStudent(payload);
            if(data.code){
                context.dispatch('getStudentsAsync');
                return 1;
            }
            else{
                console.log(data.message);
                return 0;
            }
        }
    }
}