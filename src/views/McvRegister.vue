<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 class="text-center">Sign Up</h1>
        <p class="text-center">
          Already have an account?
          <router-link :to="{ name: 'register' }">Log In</router-link>
        </p>
        <form @submit.prevent="registerUser()">
          <fieldset
            v-for="({ name, type, placeholder }, i) in formFields"
            :key="i"
            :disabled="isSubmitting"
            class="mb-2"
          >
            <input
              :type="type"
              :name="name"
              :placeholder="placeholder"
              class="form-control"
              required
            />
          </fieldset>
          <div class="d-grid">
            <button
              :disabled="isSubmitting"
              :class="[isSubmitting && 'disabled', 'btn btn-success bg-gradient']"
            >Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthState } from '@/composables/useAuthState'
import { registerFormFields as formFields } from '@/constants/forms'

const { registerUser, isSubmitting } = useAuthState()
</script>
