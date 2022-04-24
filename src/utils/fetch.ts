import axios, {AxiosInstance, AxiosResponse} from 'axios'
import {refreshAccessToken} from '../api/http'
import {clearTokens, getTokens, setAccessToken,} from './token'

type RefreshResponse = {
  access: string,
}

const applyResponseInterceptor = (instance: AxiosInstance) => {
  const interceptor = instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status !== 401) {
        return Promise.reject(error)
      }

      instance.interceptors.response.eject(interceptor)

      const {refresh} = getTokens()
      if (refresh) {
        return refreshAccessToken(refresh)
          .then((response: AxiosResponse<RefreshResponse>) => {
            const {access} = response.data
            setAccessToken(access)
            error.response.config.headers.Authorization = `Bearer ${access}`

            return instance(error.response.config)
          }).catch((refreshError) => {
            clearTokens()
            return Promise.reject(refreshError)
          })
      }

      return Promise.reject(error)
    },
  )
}

const applyRequestInterceptor = (instance: AxiosInstance) => (
  instance.interceptors.request.use((config) => {
    const {access} = getTokens()
    if (access) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${access}`,
      }
    }

    return config
  })
)

const fetch = (): AxiosInstance => {
  const instance = axios.create()

  const {access, refresh} = getTokens()
  applyRequestInterceptor(instance)
  if (access || refresh) {
    applyResponseInterceptor(instance)
  }

  return instance
}

export default fetch
