import { auth_types } from '../types'
import ajax from '../../utils/ajax/ajax'

export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    [auth_types.CHANGE_USER_INFO]: (state, user) => {
      state.user = user
    }
  },
  actions: {
    login({ commit }, data = { username: '', password: '' }) {
      return ajax.post('login', data).then(ret => {
        commit(auth_types.CHANGE_USER_INFO, ret.data.data)
      })
    }
  }
}