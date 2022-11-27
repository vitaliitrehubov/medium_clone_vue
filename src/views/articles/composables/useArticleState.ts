import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { actionTypes } from '@/store/modules/article'

export const useArticleState = () => {
  const store = useStore()
  const route = useRoute()
  const router = useRouter()

  const error = computed(() => store.state.article.error)
  const isLoading = computed(() => store.state.article.isLoading)
  const article = computed(() => store.state.article.data)

  const getArticle = (slug: string): Promise<any> =>
    store.dispatch(actionTypes.getArticle, slug)

  const deleteArticle = (slug: string) =>
    store.dispatch(actionTypes.deleteArticle, slug)
      .then(() => router.push({ name: 'yourFeed' }))

  const getSlug = () => route.params?.slug

  return {
    error,
    isLoading,
    article,
    getSlug,
    getArticle,
    deleteArticle
  }
}