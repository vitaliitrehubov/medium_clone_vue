<template>
  <h1 class="text-center text-muted">Sign In</h1>
  <p class="text-center">
    Don't have an account?
    <router-link :to="{ name: 'register' }">Sign Up</router-link>
  </p>
  <auth-form
    @submit="loginUser($event, credentials)"
    :form-fields="loginFormFields"
    submit-btn-text="Sign In"
  ></auth-form>
</template>

<script setup>
import AuthForm from '@/components/AuthForm.vue'
import { useAuthForm } from '@/composables/useAuthForm'
import { loginFormFields } from '@/constants/forms'

const { loginUser } = useAuthForm()
</script>
