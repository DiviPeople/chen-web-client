import Cookies from 'js-cookie'

const expireTime = 30

export const getTokens = () => ({
  access: Cookies.get('accessToken'),
  refresh: Cookies.get('refreshToken'),
})

export const setAccessToken = (accessToken: string): void => {
  Cookies.set('accessToken', accessToken, {expires: expireTime})
}

export const setRefreshToken = (refreshToken: string): void => {
  Cookies.set('refreshToken', refreshToken, {expires: expireTime})
}

export const setTokens = (accessToken: string, refreshToken: string): void => {
  setAccessToken(accessToken)
  setRefreshToken(refreshToken)
}

export const clearTokens = (): void => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
}
  