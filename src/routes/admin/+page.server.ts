import type {Actions, RequestEvent} from '@sveltejs/kit'
import {env} from '$env/dynamic/public'

export const actions = {
  create_user: async ({request, cookies}: RequestEvent) => {
    const formData = await request.formData()
    const token = cookies.get('token')

    if (typeof token === 'string') {
      await fetch(`${env.PUBLIC_API_URL}/user`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `token=${token}`,
        },
        body: JSON.stringify({
          email: formData.get('email'),
          user_name: formData.get('login'),
          full_name: formData.get('full_name'),
          is_staff: formData.has('staff'),
          is_superuser: false,
        }),
      })
    }
  },

  delete_user: async ({request, cookies}: RequestEvent) => {
    const formData = await request.formData()
    const token = cookies.get('token')

    if (typeof token === 'string') {
      await fetch(`${env.PUBLIC_API_URL}/user`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `token=${token}`,
        },
        body: JSON.stringify({
          user_name: formData.get('delete_login'),
        }),
      })
    }
  },
} satisfies Actions
