import axios from '@/api/axios'
import { ArticleResponse, NewArticleInterface } from '@/types/feed'

const getArticle = (slug: string): Promise<any> => {
  return axios
    .get(`/articles/${slug}`)
    .then(({ data: { article } }: ArticleResponse) => article)
}

const deleteArticle = (slug: string): Promise<any> => {
  return axios
    .delete(`/articles/${slug}`)
}

const createArticle = (article: NewArticleInterface): Promise<any> => {
  return axios
    .post('/articles', { article })
    .then(({ data: { article } }: ArticleResponse) => article.slug)
}

export default {
  getArticle,
  deleteArticle,
  createArticle
}