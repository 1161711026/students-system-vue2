import axios from "axios";

import { MessageBox } from 'element-ui';
import router from '@/router'

//拦截所有的响应 当成功的时候返回 promise中的data 当失败的时候直接返回报错 若是返回报错码时401则进行拦截 并且跳转到登录页
axios.interceptors.response.use((config) => {
    return config.data;
}, (err) => {
    if (err.response.status == 401) {
        MessageBox.alert('您的登录已过期，请重新登录', '警告', {
            confirmButtonText: '确定',
            callback: () => {
                router.push("/user/register");
            }
        });
    } else {    
        return Promise.reject(err);
    }
})

//拦截所有的请求 添加headers authorizition
axios.interceptors.request.use((config) => {

    config.headers.Authorization = localStorage.token;
    return config;
}, (err) => {
    return Promise.reject(err);
});