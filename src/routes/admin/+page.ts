import {redirect} from '@sveltejs/kit'
import type {PageLoad} from './$types'
import {env} from '$env/dynamic/public'

export const load = (async ({fetch}) => {
  const response = await fetch(`${env.PUBLIC_API_URL}/me`, {
    credentials: 'include',
  })
  const result = await response.json()
  if (!result.is_staff) {
    throw redirect(308, `${env.PUBLIC_CLIENT_URL}`)
  }

  const me = async () => {
    const response = await fetch(`${env.PUBLIC_API_URL}/me`, {
      credentials: 'include',
    })
    const result = await response.json()
    return result
  }

  const users = async () => {
    const response = await fetch(`${env.PUBLIC_API_URL}/users`, {
      credentials: 'include',
    })
    const result = await response.json()
    return result
  }

  return {
    me: me(),
    users: users(),
  }
}) satisfies PageLoad
