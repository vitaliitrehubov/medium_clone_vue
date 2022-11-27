import articleApi from '@/api/article'
import { ArticleState, ArticleInterface } from '@/types/feed'

export const mutationTypes = {
  getArticleStart: '[article] getArticleStart',
  getArticleError: '[article] getArticleError',
  getArticleSuccess: '[article] getArticleSuccess',

  deleteArticleStart: '[article] deleteArticleStart',
  deleteArticleError: '[article] deleteArticleError',
  deleteArticleSuccess: '[article] deleteArticleSuccess'
}

export const actionTypes = {
  getArticle: '[article] getArticle',
  deleteArticle: '[article] deleteArticle'
}

const state: ArticleState = {
  data: null,
  isLoading: false,
  error: false
}

const mutations = {
  [mutationTypes.getArticleStart](state: ArticleState) {
    state.data = null
    state.isLoading = true
    state.error = false
  },
  [mutationTypes.getArticleError](state: ArticleState) {
    state.data = null
    state.isLoading = false
    state.error = true
  },
  [mutationTypes.getArticleSuccess](state: ArticleState, data: ArticleInterface) {
    state.data = data
    state.isLoading = false
    state.error = false
  },

  [mutationTypes.deleteArticleStart](state: ArticleState) {
    state.isLoading = true
  },
  // [mutationTypes.deleteArticleError]() {},
  [mutationTypes.deleteArticleSuccess](state: ArticleState) {
    state.isLoading = false
  }
}

const actions = {
  [actionTypes.getArticle]({ commit }, slug: string): Promise<any> {
    return new Promise((resolve) => {
      commit(mutationTypes.getArticleStart)
      articleApi
        .getArticle(slug)
        .then((data: ArticleInterface) => {
          commit(mutationTypes.getArticleSuccess, data)
          resolve(data)
        })
        .catch(() => commit(mutationTypes.getArticleError))
    })
  },

  [actionTypes.deleteArticle]({ commit }, slug: string): Promise<void> {
    return new Promise((resolve) => {
      commit(mutationTypes.deleteArticleStart)
      articleApi
        .deleteArticle(slug)
        .then(() => {
          commit(mutationTypes.deleteArticleSuccess)
          resolve()
        })
        .catch(() => commit(mutationTypes.deleteArticleError))
    })
  }
}

export default {
  state,
  actions,
  mutations
}
