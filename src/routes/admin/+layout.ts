import type {LayoutLoad} from './$types'
import {env} from '$env/dynamic/public'

export const load = (async ({fetch}) => {
  const me = async () => {
    const response = await fetch(`${env.PUBLIC_API_URL}/me`, {
      credentials: 'include',
    })
    const result = await response.json()
    return result
  }

  return {
    me: me(),
  }
}) satisfies LayoutLoad
