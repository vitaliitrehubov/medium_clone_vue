import axios from '@/api/axios'
import { ArticleResponse } from '@/types/feed'

const getArticle = (slug: string): Promise<any> => {
  return axios
    .get(`/articles/${slug}`)
    .then(({ data: { article } }: ArticleResponse) => article)
}

export default {
  getArticle
}