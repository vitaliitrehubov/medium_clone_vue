import { computed } from 'vue'
import { useRoute } from 'vue-router'

export const useFeedRoute = () => {
  const route = useRoute()

  const tagName = computed(() => route.params.slug)
  const apiUrl = computed(() => `/articles?tag=${route.params.slug}`)

  return {
    apiUrl,
    tagName
  }
}

