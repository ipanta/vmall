import Mock, { Random } from 'mockjs'

/**
 * 这个是`Message`的示例模型
 */
export default {
  /* 获取列表示例函数 */
  getMessageList(options) {
    
    /* 这边可以自定义更多生成逻辑， 具体可参考Mockjs官方文档  */

    const list = [
      {
        id: 0,
        text: 'Hello, This is a message.'
      }
    ]

    return list // 返回最终的mock数据
  }
}