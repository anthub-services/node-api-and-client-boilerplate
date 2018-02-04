import Axios from 'axios';

let AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true
});

AxiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Intercept Axios response so can redirect user to Login page if token is not valid anymore
AxiosInstance.interceptors.response.use(function(response) {
  return response;
});

export default AxiosInstance;
