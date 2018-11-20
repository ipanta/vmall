import Mock, { Random } from 'mockjs'

/**
 * 用户系统，鉴权登录相关
 */
export default {
  login(options) {
    let { username, password } = JSON.parse(options.body)
    return {
      code: 0,
      data: {
        username,
        password,
        state: 1,
        mobile: '18888888888',
        login_time: new Date()
      }
    }
  }
}