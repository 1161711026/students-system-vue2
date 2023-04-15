import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import student from './modules/students'
import subjects from './modules/subject'
import classes from './modules/class'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    student,
    subjects,
    classes
  }
})
