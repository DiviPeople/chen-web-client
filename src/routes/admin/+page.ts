import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const response = await fetch('http://localhost:8080/me', {
        credentials: 'include'
    })
    const result = await response.json()
    if (!result.is_staff) {
        throw redirect(308, 'http://localhost:5173/')
    }

    const me = async () => {
        const response = await fetch('http://localhost:8080/me', {
            credentials: 'include'
        })
        const result = await response.json()
        return result
    }

    const users = async () => {
        const response = await fetch('http://localhost:8080/users', {
            credentials: 'include'
        })
        const result = await response.json()
        return result
    }

    return {
        me: me(),
        users: users()
    }
}) satisfies PageLoad;
