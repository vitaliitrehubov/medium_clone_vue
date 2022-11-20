<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 class="text-center">Sign Up</h1>
        <p class="text-center">
          Already have an account?
          <router-link :to="{ name: 'register' }">Log In</router-link>
        </p>
        <form @submit.prevent="onSubmit()">
          <fieldset v-for="({ name, type, placeholder }, i) in formFields" :key="i" class="mb-2">
            <input
              :type="type"
              :name="name"
              :placeholder="placeholder"
              class="form-control"
              required
            />
          </fieldset>
          <div class="d-grid">
            <button class="btn btn-success bg-gradient">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const formFields = [
  { name: 'username', type: 'text', placeholder: 'Username' },
  { name: 'email', type: 'email', placeholder: 'Email' },
  { name: 'password', type: 'password', placeholder: 'Password' },
]

const onSubmit = () => {
  console.log('SUBMITTED THE FORM!')
}
</script>
