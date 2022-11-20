import { useStore } from 'vuex'
import { computed } from 'vue'

export const useAuthState = () => {
  const store = useStore()

  const isSubmitting = computed(() => store.state.auth.isSubmitting)

  return {
    isSubmitting,
  }
}