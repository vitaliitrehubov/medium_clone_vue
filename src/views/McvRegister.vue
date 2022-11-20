<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 class="text-center text-muted">Sign Up</h1>
        <p class="text-center">
          Already have an account?
          <router-link :to="{ name: 'register' }">Log In</router-link>
        </p>
        <auth-form
          @submit="onSubmit($event, credentials)"
          :form-fields="formFields"
          submit-btn-text="Sign Up"
        ></auth-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import AuthForm from '@/components/AuthForm.vue'
import { useAuthForm } from '@/composables/useAuthForm'
import { registerFormFields as formFields } from '@/constants/forms'

const { registerUser } = useAuthForm()

const onSubmit = (credentials) => registerUser(credentials)
</script>
