import authApi from '@/api/auth'

export interface authState {
  isSubmitting: boolean
}

export const mutationTypes = {
  registerStart: '[auth] registerStart'
}

export const actionTypes = {
  register: '[auth] register'
}

const state = {
  isSubmitting: false,
}

const mutations = {
  [mutationTypes.registerStart](state: authState) {
    state.isSubmitting = true
  }
}

const actions = {
  [actionTypes.register]({ commit }, credentials) {
    commit(mutationTypes.registerStart)
    return new Promise((resolve) => {
      authApi
        .register(credentials)
        .then((response) => console.log(response))
        .catch((e) => console.log(e))
    })
  }
}

export default {
  state,
  mutations,
  actions
}