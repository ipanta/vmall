import axiosInstance from './ajax'
export default {
  /* 插件化ajax，注入axios实例，get，post等常用方法 */
  install(Vue, options) {
    Vue.prototype.$axios = axiosInstance
    Vue.prototype.$get = axiosInstance.get
    Vue.prototype.$post = axiosInstance.post
  }
}