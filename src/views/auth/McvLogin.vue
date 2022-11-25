<template>
  <h1 class="text-center text-muted text-capitalize">{{ $t('forms.signIn') }}</h1>
  <p class="text-center">
    {{ $t('forms.noAccountMsg')}}
    <router-link :to="{ name: 'register' }">{{ $t('forms.signUp') }}</router-link>
  </p>
  <auth-form
    @submit="loginUser($event, credentials)"
    :form-fields="loginFormFields"
    submit-btn-text="forms.signIn"
  ></auth-form>
</template>

<script setup>
import AuthForm from '@/views/auth/components/AuthForm.vue'
import { useAuthForm } from '@/composables/useAuthForm'
import { loginFormFields } from '@/constants/forms'

const { loginUser } = useAuthForm()
</script>
