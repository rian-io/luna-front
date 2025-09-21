import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        token: null as string | null,
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
    },

    actions: {
        login(access_token: string): void {
            this.token = access_token
            localStorage.setItem('token', this.token)
        },

        logout() {
            this.token = null
            localStorage.removeItem('token')
        },

        loadFromStorage() {
            const token = localStorage.getItem('token')

            if (token) this.token = token
        },
    },
})
