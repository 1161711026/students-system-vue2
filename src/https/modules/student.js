//引入axios
import axios from "axios"


export default {
    //获取学生数据方法
    getStudents(params){
        return axios({
            url: '/students/getStudents',
            method: 'GET',
            params,
        })
    },
    //增加学生
    addStudent(data){
        return axios({
            url: '/students/addStudents',
            method: 'POST',
            data,
        })
    },
    //更新学生数据
    updatedStudent(data) {
        return axios({
            url: 'students/updateStudents',
            method: 'PUT',
            data,
        })
    },
    //删除学生
    deleteStudent(data){
        return axios({
            url: '/students/deleteStudents',
            method: 'DELETE',
            data,
        })
    },
    //通过学生ID获取学生信息
    getStudentsById(params){
        return axios({
            url: '/students/getStudentsById',
            method: 'GET',
            params,
        })
    }
}