import { useUserStore } from '@/store/auth'

export default defineNuxtRouteMiddleware(() => {
    const userStore = useUserStore()
    if (!userStore.isAuthenticated) {
        return navigateTo('/login')
    }
})
