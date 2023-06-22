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

  return {
    users: users(),
  }
}) satisfies PageLoad
