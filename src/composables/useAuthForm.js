import { useStore } from 'vuex'
import { reactive } from 'vue'

import { actionTypes } from '@/store/modules/auth'

export const useAuthForm = () => {
  const store = useStore()

  const registerUser = (credentials) => {
    store.dispatch(actionTypes.register, credentials)
  }

  const initFormValue = (formFields) => {
    const formValue = {} 

    for (const field of formFields) {
      formValue[field.name] = null
    }

    return reactive(formValue)
  }

  return {
    registerUser,
    initFormValue
  }
}