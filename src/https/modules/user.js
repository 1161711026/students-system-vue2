// 暴露user对象出去 包含user的所有请求操作
import axios from "axios";
export default {
    //登录请求
    //data包含 username,userpass
    login(data){
      
        return axios({
            url: '/users/login',
            method: 'POST',
            data
        })
    },
    //注册请求
    //data包含 username,userpass
    register(data){
        return axios({
            url: '/users/register',
            method: 'POST',
            data
        })
    },
    //获取用户信息
    //需要在请求头中添加 Authorization: token
    getUserInfo(data){
       
        return axios({
            url: '/users/getUserInfo',
            method: 'GET',
            headers:{
                Authorization: data,
            }
        })
    },


}