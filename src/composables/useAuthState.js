import { useStore } from 'vuex'
import { computed } from 'vue'

import { mutationTypes, actionTypes } from '@/store/modules/auth'

export const useAuthState = () => {
  const store = useStore()

  const user = computed(() => store.state.auth.user)
  const isLoggedIn = computed(() => store.state.auth.isLoggedIn)
  const isLoading = computed(() => store.state.auth.isLoading)
  const isSubmitting = computed(() => store.state.auth.isSubmitting)
  const errors = computed(() => store.state.auth.errors)
  const emailOrPasswordInvalid = computed(() => store.state.auth?.errors?.['email or password'])

  const resetAuthState = () => store.commit(mutationTypes.resetState)
  const getUser = () => store.dispatch(actionTypes.getUser)

  return {
    user,
    getUser,
    isLoggedIn,
    isLoading,
    isSubmitting,
    errors,
    resetAuthState,
    emailOrPasswordInvalid
  }
}