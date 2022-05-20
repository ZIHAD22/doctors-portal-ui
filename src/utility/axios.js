import axios from 'axios'

let selectedBaseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  selectedBaseURL = process.env.REACT_APP_DEV_API_URL
} else {
  selectedBaseURL = process.env.REACT_APP_PRO_API_URL
}

console.log(selectedBaseURL)

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    config.baseURL = selectedBaseURL
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default axios
