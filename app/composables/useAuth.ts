import { useFetch, useRuntimeConfig } from 'nuxt/app'
import { ref, unref } from 'vue'


export const useAuth = () => {
    const config = useRuntimeConfig()

    const loading = ref(false)
    const error = ref<string | null>(null)

    async function login(email: string, password: string) {
        loading.value = true
        error.value = null

        try {
            const params = new URLSearchParams()
            params.append('username', email)
            params.append('password', password)

            const { data, error: fetchError } = await useFetch('/auth/login', {
                baseURL: config.public.apiBase,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params.toString(),
            })

            if (fetchError?.value) {
                // useFetch returns a reactive error; surface a string message
                error.value = (fetchError.value as any)?.data?.message || fetchError.value.message || 'Login failed'
                return Promise.reject(fetchError.value)
            }

            return unref(data)
        } catch (e: any) {
            error.value = e?.message || 'Login failed'
            return Promise.reject(e)
        } finally {
            loading.value = false
        }
    }

    async function getUser() {
        return await $fetch('/users/me', {
            baseURL: config.public.apiBase,
            method: 'GET',
            credentials: 'include' // if you’re using cookies
        })
    }

    function logout() {
        // Clear user state and any stored tokens/cookies
    }

    return {
        login,
        logout,
        getUser,
        loading,
        error,
    }
}
