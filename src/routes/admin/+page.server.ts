import type {RequestEvent} from '@sveltejs/kit'

export const actions = {
  users: async ({request}: RequestEvent) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const full_name = formData.get('login')
    const is_staff = formData.has('staff')

    let response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        full_name: full_name,
        is_staff: is_staff,
      }),
    })
  },
}
