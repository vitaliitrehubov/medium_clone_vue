import feedApi from '@/api/feed'
import { FeedState, FeedInterface, FeedResponse } from '@/types/feed'

const state: FeedState = {
  data: null,
  isLoading: false,
  error: false
}

export const actionTypes = {
  getFeed: '[feed] getFeed'
}

export const mutationTypes = {
  getFeedStart: '[feed] getFeedStart',
  getFeedError: '[feed] getFeedError',
  getFeedSuccess: '[feed] getFeedSuccess'
}

const mutations = {
  [mutationTypes.getFeedStart](state: FeedState) {
    state.isLoading = true
    state.error = false
    state.data = null
  },
  [mutationTypes.getFeedError](state: FeedState) {
    state.isLoading = false
    state.error = true
  },
  [mutationTypes.getFeedSuccess](state: FeedState, data: FeedInterface) {
    state.isLoading = false
    state.error = false
    state.data = data
  }
}

const actions = {
  [actionTypes.getFeed]({ commit }, { apiUrl }) {
    return new Promise((resolve) => {
      commit(mutationTypes.getFeedStart)
      feedApi
        .getFeed(apiUrl)
        .then(({ data }: FeedResponse) => {
          console.log('DATA: ', data)
          commit(mutationTypes.getFeedSuccess, data)
          resolve(data)
        })
        .catch(() => commit(mutationTypes.getFeedError))
    })
  }
}

export default {
  state,
  mutations,
  actions
}
