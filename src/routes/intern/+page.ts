import {redirect} from '@sveltejs/kit'

import {env} from '$env/dynamic/public'

import type {PageLoad} from './$types'

export const load = (async ({fetch}) => {
  const users = async () => {
    const response = await fetch(`${env.PUBLIC_API_URL}/users`, {
      credentials: 'include',
    })
    const result = await response.json()
    return result
  }

  const me = async () => {
    const response = await fetch(`${env.PUBLIC_API_URL}/me`, {
      credentials: 'include',
    })

    if (!response.ok) {
      throw redirect(308, `${env.PUBLIC_CLIENT_URL}`)
    }

    const result = await response.json()
    if (result.is_staff) {
      throw redirect(308, `${env.PUBLIC_CLIENT_URL}`)
    }

    return result
  }

  return {
    users: users(),
    me: me(),
  }
}) satisfies PageLoad
