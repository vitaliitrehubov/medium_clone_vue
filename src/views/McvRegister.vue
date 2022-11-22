<template>
  <h1 class="text-center text-muted text-capitalize">{{ $t('forms.signUp') }}</h1>
  <p class="text-center">
    Already have an account?
    <router-link :to="{ name: 'login' }">Log In</router-link>
  </p>
  <auth-form
    @submit="onSubmit($event, credentials)"
    :form-fields="formFields"
    submit-btn-text="Sign Up"
  ></auth-form>
</template>

<script setup>
import AuthForm from '@/components/AuthForm.vue'
import { useAuthForm } from '@/composables/useAuthForm'
import { registerFormFields as formFields } from '@/constants/forms'

const { registerUser } = useAuthForm()

const onSubmit = (credentials) => registerUser(credentials)
</script>
