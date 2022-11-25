import { computed } from 'vue'
import { useStore } from 'vuex'
import { actionTypes } from '@/store/modules/popularTags'

export const usePopularTagsState = () => {
  const store = useStore()

  const popularTags = computed(() => store.state.popularTags?.tags)
  const isLoading = computed(() => store.state.popularTags.isLoading)
  const error = computed(() => store.state.popularTags.error)

  const getPopularTags = () => store.dispatch(actionTypes.getPopularTags)

  return {
    getPopularTags,
    popularTags,
    isLoading,
    error
  }
}
