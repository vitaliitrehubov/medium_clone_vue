import { reactive } from 'vue'
import { NewArticleInterface } from '@/types/feed'

export const useCreateArticleForm = () => {
  const initFormValue = (article: NewArticleInterface | null) =>
    reactive({
      title: article?.title,
      description: article?.description,
      body: article?.body,
      tagList: article?.tagList
    })

  return {
    initFormValue,
  }
}