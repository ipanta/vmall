import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 异步懒加载可采用以下写法，推荐非首屏必须加载的组件按以下方式加载
      component: () => import(/* webpackChunkName: "about" */ '../views/pages/About.vue')
    }
  ]
})
