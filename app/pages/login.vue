<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';
import { ref } from 'vue';

const fields = ref([
    {
        name: 'email',
        type: 'email' as const,
        label: 'Email',
        placeholder: 'Enter your email',
        required: true
    },
    {
        name: 'password',
        type: 'password' as const,
        label: 'Password',
        placeholder: 'Enter your password',
        required: true
    }
]);

const providers = ref<ButtonProps[]>([
    {
        label: 'Google',
        icon: 'i-simple-icons-google',
        color: 'neutral',
        variant: 'subtle',
        block: true
    },
    {
        label: 'GitHub',
        icon: 'i-simple-icons-github',
        color: 'neutral',
        variant: 'subtle',
        block: true
    }
]);

function onSubmit(payload: Record<string, any>) {
    console.log('Form submitted with data:', payload["data"].email, payload["data"].password);
}
</script>

<template>
    <div class="flex min-h-screen items-center justify-center">
        <UAuthForm class="max-w-md" title="Login" description="Enter your credentials to access your account."
            icon="i-lucide-user" :providers="providers" :fields="fields" @submit="onSubmit">
            <template #description>
                Don't have an account? <ULink to="#" class="text-primary font-medium">Sign up</ULink>.
            </template>
            <template #password-hint>
                <ULink to="#" class="text-primary font-medium" tabindex="-1">Forgot password?</ULink>
            </template>
            <template #validation>
                <UAlert color="error" icon="i-lucide-info" title="Error signing in" />
            </template>
            <template #footer>
                By signing in, you agree to our <ULink to="#" class="text-primary font-medium">Terms of Service</ULink>.
            </template>
        </UAuthForm>
    </div>
</template>
