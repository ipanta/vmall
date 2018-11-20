import Mock from 'mockjs'

/* 数据模型 */
import Message from './models/Message'
import Authentication from './models/Authentication'

/* 具体的API接口地址的mock对应配置 */
Mock.mock('msg/list', 'get', Message.getMessageList)
Mock.mock('login', 'post', Authentication.login)

export default Mock