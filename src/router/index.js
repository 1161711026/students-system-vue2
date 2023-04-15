import Vue from 'vue'
import VueRouter from 'vue-router'
import User from "@/views/user/User.vue";
import Register from '../views/user/Register.vue'
import Home from '../views/home/Home.vue'
import StudentsList from '../views/students/StudentsList.vue'
import AddStudents from '../views/students/AddStudents.vue'
import EditStudent from '@/views/students/EditStudent.vue';
import { MessageBox} from 'element-ui';

const Login = ()=>import("../views/user/Login.vue");

Vue.use(VueRouter)

const routes = [
  {
    //重定向路由  跳转到主页Home
    path: '/',
    redirect: "Home"
  },
  {
    //登录注册页路由
    path: '/user',
    name: 'User',
    component: User,
    children:[
      {
        //注册页
        path: 'login',
        name: 'Login',
        component: Login,
        meta: {
          title: '用户注册'
        }
      },
      {
        //登录页
        path: 'register',
        name: 'Register',
        component: Register,
        meta: {
          title: '用户登录'
        }
      }
    ]
  },
  {
    //主页
    path: '/home',
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
        if(!localStorage.token){
          MessageBox.alert('您还没有登录，请先登录', '警告', {
            confirmButtonText: '确定',
            callback: () => {
                router.push("/user/register");
            }
        });
        }
        else{
          next();
        }
    },
    children:[
      {
        path: 'studentsList',
        name: 'StudentsList',
        component: StudentsList,
      },
      {
        path: 'addStudents',
        name: 'AddStudents',
        component: AddStudents
      },
      {
        path: 'editStudent/:id',
        name: 'EditStudent',
        component: EditStudent,
      },
   
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
