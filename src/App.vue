<template>
  <div id="app">
    <button @click="getMsg">MessageList</button>
    <button @click="login">Login</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
/* 帮助函数使用方法可查看Vuex官方文档 */
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth', {
      userInfo: state => state.user
    })
  },
  methods: {
    ...mapActions('auth', {
      /* 登录 */
      login(dispatch) {
        dispatch('login', { username: 'Admin', password: '123' }).then(ret => {
          console.log('--- 登录成功 ----')
          console.log(this.userInfo)
        })
      }
    }),
    /* 获取消息 */
    getMsg() {
      this.$get('msg/list').then(ret => {
        console.log(ret.data)
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
