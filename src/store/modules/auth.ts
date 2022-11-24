import authApi from '@/api/auth'
import {
  AuthCredentials,
  UserInterface,
  AuthState,
  AuthErrorResponse,
  AuthSuccessResponse,
  AuthValidationErrors
 } from '@/types/auth'
 import { setItem } from '@/utils/persistanceStorage'

export const mutationTypes = {
  registerStart: '[auth] registerStart',
  registerFailure: '[auth] registerFailure',
  registerSuccess: '[auth] registerSuccess',

  resetState: '[auth] resetState',

  loginStart: '[auth] loginStart',
  loginFailure: '[auth] loginFailure',
  loginSuccess: '[auth] loginSuccess',

  getUserStart: '[auth] getUserStart',
  getUserFailure: '[auth] getUserFailure',
  getUserSuccess: '[auth] getUserSuccess'
}

export const actionTypes = {
  register: '[auth] register',
  login: '[auth] login',
  getUser: '[auth] getUser'
}

const state: AuthState = {
  isSubmitting: false,
  isLoading: false,
  user: null,
  isLoggedIn: null,
  errors: null
}

const mutations = {
  [mutationTypes.registerStart](state: AuthState) {
    state.isSubmitting = true
    state.errors = null
  },
  [mutationTypes.registerFailure](state: AuthState, errors: AuthValidationErrors) {
    state.isSubmitting = false
    state.errors = errors
    state.user = null
  },
  [mutationTypes.registerSuccess](state: AuthState, user: UserInterface) {
    state.isSubmitting = false
    state.errors = null
    state.user = user
    state.isLoggedIn = true
  },

  [mutationTypes.resetState](state: AuthState) {
    state.isSubmitting = false,
    state.user = null,
    state.isLoggedIn = null,
    state.errors = null
  },

  [mutationTypes.loginStart](state: AuthState) {
    state.isSubmitting = true
    state.errors = null
    state.user = null
    state.isLoggedIn = null
  },
  [mutationTypes.loginFailure](state: AuthState, errors: AuthValidationErrors) {
    state.isSubmitting = false
    state.errors = errors
    state.user = null
    state.isLoggedIn = false
  },
  [mutationTypes.loginSuccess](state: AuthState, user: UserInterface) {
    state.isSubmitting = false
    state.errors = null
    state.user = user
    state.isLoggedIn = true
  },

  [mutationTypes.getUserStart](state: AuthState) {
    state.isLoading = true
  },
  [mutationTypes.getUserFailure](state: AuthState) {
    state.isLoading = false
    state.user = null
    state.isLoggedIn = false
  },
  [mutationTypes.getUserSuccess](state: AuthState, user: UserInterface) {
    state.isLoading = false
    state.user = user
    state.isLoggedIn = true
  }
}

const actions = {
  [actionTypes.register]({ commit }, credentials: AuthCredentials) {
    commit(mutationTypes.registerStart)
    return new Promise((resolve) => {
      authApi
        .register(credentials)
        .then(({ data: { user } }: AuthSuccessResponse) => {
          setItem('accessToken', user.token)
          commit(mutationTypes.registerSuccess, user)
          resolve(user)
        })
        .catch(({ response: { data: { errors } }}: AuthErrorResponse) => {
          commit(mutationTypes.registerFailure, errors)
        })
    })
  },

  [actionTypes.login]({ commit }, credentials: AuthCredentials) {
    commit(mutationTypes.loginStart)
    return new Promise((resolve) => {
      authApi
        .login(credentials)
        .then(({ data: { user } }: AuthSuccessResponse) => {
          setItem('accessToken', user.token)
          commit(mutationTypes.loginSuccess, user)
          resolve(user)
        })
        .catch(({ response: { data: { errors } }}: AuthErrorResponse) => {
          commit(mutationTypes.loginFailure, errors)
        })
    })
  },

  [actionTypes.getUser]({ commit }) {
    commit(mutationTypes.getUserStart)
    return new Promise((resolve) => {
      authApi
        .getUser()
        .then(({ data: { user } }: AuthSuccessResponse) => {
          commit(mutationTypes.getUserSuccess, user)
          resolve(user)
        })
        .catch(() => {
          commit(mutationTypes.getUserFailure)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}