import axios from 'axios'

export const signIn = (username: string, password: string) => (
  axios.post('api/auth/token/', {username, password})
)

export const refreshAccessToken = (refreshToken: string) => (
  axios.post('/api/auth/token/refresh/', {refresh: refreshToken})
)
