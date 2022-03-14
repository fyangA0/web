import axios from 'axios'

declare module 'axios' {
  interface AxiosResponse<T = any> {
    user: object,
    token: string
  }
}

const fetch = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
})

// http request interceptors
fetch.interceptors.request.use(config => {
  const token = localStorage.getItem('token')

  config.params = { ...config.params, t: +new Date() }
  config.headers.Authorization = token ? `Bearer ${token}` : null

  return config
}, e => Promise.reject(e))

// http response interceptors
fetch.interceptors.response.use(({ data }) => data, ({ response }) => Promise.reject(response.data))

export default fetch
