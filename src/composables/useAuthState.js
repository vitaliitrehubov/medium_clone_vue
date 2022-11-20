import { useStore } from 'vuex'
import { computed } from 'vue'

import { actionTypes } from '@/store/modules/auth'

export const useAuthState = () => {
  const store = useStore()

  const isSubmitting = computed(() => store.state.auth.isSubmitting)

  const registerUser = () => {
    store.dispatch(actionTypes.register)
  }

  return {
    isSubmitting,
    registerUser
  }
}