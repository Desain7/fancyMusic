import { BASE_URL, TIME_OUT } from './config'
import MyRequest from './request'

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default myRequest
