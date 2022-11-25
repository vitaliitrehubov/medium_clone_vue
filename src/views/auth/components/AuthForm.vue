<template>
  <form @submit.prevent="emit('submit', formValue)">
    <fieldset
      v-for="({ name, type, placeholder }, i) in formFields"
      :key="i"
      :disabled="isSubmitting"
      class="mb-2"
    >
      <input
        v-model.trim="formValue[name]"
        :type="type"
        :name="name"
        :placeholder="$t(placeholder)"
        :class="[(errors?.[name] || emailOrPasswordInvalid) && 'is-invalid', 'form-control']"
        required
      />
      <p v-if="errors?.[name]" class="text-capitalize text-danger mb-0">{{ name }} {{ errors?.[name]?.join() }}</p>
    </fieldset>
    <p v-if="emailOrPasswordInvalid" class="text-capitalize text-danger mb-0">Email or Password is Invalid</p>
    <div class="d-grid">
      <button :disabled="isSubmitting" class="btn btn-success bg-gradient btn-lg mt-2">
        <span v-if="isSubmitting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span v-else class="text-capitalize">{{ $t(submitBtnText) }}</span>
      </button>
    </div>
  </form>
</template>

<script setup>
import { defineProps, defineEmits, onBeforeMount } from 'vue'
import { useAuthState } from '@/composables/useAuthState'
import { useAuthForm } from '@/composables/useAuthForm'

const props = defineProps({
  formFields: {
    type: Array,
    required: true
  },
  submitBtnText: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['submit'])

const { isSubmitting, errors, emailOrPasswordInvalid, resetAuthErrors } = useAuthState()
const { initFormValue } = useAuthForm()

onBeforeMount(resetAuthErrors)

const formValue = initFormValue(props.formFields);
</script>