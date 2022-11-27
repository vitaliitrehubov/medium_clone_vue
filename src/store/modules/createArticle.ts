import articleApi from '@/api/article'
import { NewArticleState, NewArticleInterface, CreateArticleErrorResponse } from '@/types/feed'

const state: NewArticleState = {
  isSubmitting: false,
  validationErrors: null
}

export const mutationTypes = {
  createArticleStart: '[create article] createArticleStart',
  createArticleError: '[create article] createArticleError',
  createArticleSuccess: '[create article] createArticleSuccess'
}

export const actionTypes = {
  createArticle: '[create article] createArticle'
}

const mutations = {
  [mutationTypes.createArticleStart](state: NewArticleState) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationTypes.createArticleError](state: NewArticleState, errors) {
    state.isSubmitting = false
    state.validationErrors = errors
  },
  [mutationTypes.createArticleSuccess](state: NewArticleState) {
    state.isSubmitting = false
    state.validationErrors = null
  }
}

const actions = {
  [actionTypes.createArticle]({ commit }, { article }: { article: NewArticleInterface }): Promise<any> {
    return new Promise((resolve) => {
      commit(mutationTypes.createArticleStart)
      articleApi
        .createArticle(article)
        .then((slug: string) => {
          commit(mutationTypes.createArticleSuccess)
          resolve(slug)
        })
        .catch(({ response: { data } }: CreateArticleErrorResponse) => {
          commit(mutationTypes.createArticleError, data)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}