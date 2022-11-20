<template>
  <form @submit.prevent="emit('submit', formValue)">
    <fieldset
      v-for="({ name, type, placeholder }, i) in formFields"
      :key="i"
      :disabled="isSubmitting"
      class="mb-2"
    >
      <input
        v-model="formValue[name]"
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
      >
        {{ submitBtnText }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
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

const { isSubmitting } = useAuthState()
const { initFormValue } = useAuthForm()

const formValue = initFormValue(props.formFields);
</script>