import axios from '@/api/axios'
import { ArticleResponse } from '@/types/feed'

const getArticle = (slug: string): Promise<any> => {
  return axios
    .get(`/articles/${slug}`)
    .then(({ data: { article } }: ArticleResponse) => article)
}

const deleteArticle = (slug: string): Promise<any> => {
  return axios
    .delete(`/articles/${slug}`)
}

export default {
  getArticle,
  deleteArticle
}