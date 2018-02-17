import Axios from 'axios'

let AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true
})

AxiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

AxiosInstance.interceptors.response.use(function(response) {
  return response
})

export default AxiosInstance
