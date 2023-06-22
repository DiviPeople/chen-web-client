import {redirect} from '@sveltejs/kit'
import jwt_decode from 'jwt-decode'

import {env} from '$env/dynamic/public'

import type {Actions} from './$types'

export interface JwtToken {
  sub: number
  is_staff: boolean
  is_superuser: boolean
  iat: number
  exp: number
}

export const actions = {
  default: async ({request, cookies}) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    const response = await fetch(`${env.PUBLIC_API_URL}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })

    const result = await response.json()

    if (response.ok) {
      cookies.set('token', result, {maxAge: 3600})
      const decoded: JwtToken = jwt_decode(result)
      if (decoded.is_staff === true) {
        throw redirect(303, `${env.PUBLIC_CLIENT_URL}/admin`)
      } else {
        throw redirect(303, `${env.PUBLIC_CLIENT_URL}/intern`)
      }
    }
  },
} satisfies Actions
