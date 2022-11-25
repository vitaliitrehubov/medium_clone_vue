import popularTagsApi from '@/api/popularTags'
import { PopularTagsState, PopularTags } from '@/types/feed'

export const actionTypes = {
  getPopularTags: '[tags] getPopularTags'
}

export const mutationTypes = {
  getPopularTagsStart: '[tags] getPopularTagsStart',
  getPopularTagsError: '[tags] getPopularTagsError',
  getPopularTagsSuccess: '[tags] getPopularTagsSuccess'
}

const state: PopularTagsState = {
  tags: null,
  error: false,
  isLoading: false
}

const mutations = {
  [mutationTypes.getPopularTagsStart](state: PopularTagsState) {
    state.isLoading = true
    state.tags = null
    state.error = false
  },
  [mutationTypes.getPopularTagsError](state: PopularTagsState) {
    state.isLoading = false
    state.tags = null
    state.error = true
  },
  [mutationTypes.getPopularTagsSuccess](state: PopularTagsState, tags: PopularTags) {
    state.isLoading = false
    state.tags = tags
    state.error = false
  }
}

const actions = {
  [actionTypes.getPopularTags]({ commit }) {
    return new Promise((resolve) => {
      commit(mutationTypes.getPopularTagsStart)
      popularTagsApi
        .getPopularTags()
        .then((tags: PopularTags) => {
          commit(mutationTypes.getPopularTagsSuccess, tags)
          resolve(tags)
        })
        .catch(() => commit(mutationTypes.getPopularTagsError))
    })
  }
}

export default {
  state,
  mutations,
  actions,
}