import { useStore } from 'vuex'
import { computed } from 'vue'

import { mutationTypes } from '@/store/modules/auth'

export const useAuthState = () => {
  const store = useStore()

  const user = computed(() => store.state.auth.user)
  const isLoggedIn = computed(() => store.state.auth.isLoggedIn)
  const isSubmitting = computed(() => store.state.auth.isSubmitting)
  const errors = computed(() => store.state.auth.errors)
  const emailOrPasswordInvalid = computed(() => store.state.auth?.errors?.['email or password'])

  const resetAuthState = () => store.commit(mutationTypes.resetState)

  return {
    user,
    isLoggedIn,
    isSubmitting,
    errors,
    resetAuthState,
    emailOrPasswordInvalid
  }
}