import axios from 'axios'
/* 根据传入的option生成axios实例 */
const axiosInstance = axios.create({
  // 具体的配置项目可参考axios官方文档，可配置诸如：timeout等常用属性
})


/* axios 请求勾子函数 */
axiosInstance.interceptors.request.use(config => {
  /* 正确请求前 */
  // ...

  return config
}, error => {
  /* 请求发生错误 */
  // ...

})


/* axios 回复钩子函数 */
axiosInstance.interceptors.response.use(responsed => {
  /* 数据请求成功 */
  // ... 可以在此处统一处理状态码对应的逻辑操作与消息提示等

  return responsed
}, error => {
  /* 数据请求失败 */
  // ...

})


// 其他方法也可自行封装
export default axiosInstance

