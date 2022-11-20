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
  [actionTypes.register]({ commit }) {
    commit(mutationTypes.registerStart)
  }
}

export default {
  state,
  mutations,
  actions
}