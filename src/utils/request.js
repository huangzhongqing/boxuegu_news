/**
 * 请求模块
 */
import axios from 'axios'

const request = axios.create({
  // 接口的基准路径
  baseURL: 'http://127.0.0.1:3001/',
})


export default request
