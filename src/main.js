import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ajaxPlugin from './utils/ajax/index'

/* 生产环境可注释调底下语句，去除mock */
import './data/mock/index'

/* 安装自己封装的ajax插件 */
Vue.use(ajaxPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
