import Vue from 'vue'
import Vuex from 'vuex'

/* store模块 */
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    auth
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
