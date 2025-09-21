<script setup lang="ts">
import { useUserStore } from '@/store/auth';
import { useRouter } from 'vue-router';

const router = useRouter()

definePageMeta({
    middleware: 'auth'
})

function logout() {
    const store = useUserStore()
    store.logout()
    router.push('/')
}

</script>

<template>
    <div>
        <UButton to="/" @click="logout">Logout</UButton>
    </div>
</template>
