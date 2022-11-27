import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { actionTypes } from '@/store/modules/createArticle'
import { NewArticleInterface } from '@/types/feed'

export const useCreateArticleState = () => {
  const store = useStore()
  const router = useRouter()

  const isSubmitting = computed(() => store.state.createArticle.isSubmitting)
  const errors = computed(() => store.state.createArticle.validationErrors)
  

  const createArticle = ({ article }: { article: NewArticleInterface}) => {
    store.dispatch(actionTypes.createArticle, { article })
      .then((slug: string) => router.push({ name: 'article', params: { slug } }))
  }

  return {
    isSubmitting,
    createArticle,
    errors
  }
}