import {redirect} from '@sveltejs/kit'

import {env} from '$env/dynamic/public'

import type {LayoutLoad} from './$types'

export const load = (async ({fetch}) => {
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
    me: me(),
  }
}) satisfies LayoutLoad
