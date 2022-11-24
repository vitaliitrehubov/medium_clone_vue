import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { actionTypes } from "@/store/modules/auth";

export const useAuthForm = () => {
  const store = useStore();
  const router = useRouter();

  const registerUser = (credentials) => {
    store
      .dispatch(actionTypes.register, credentials)
      .then(() => router.push({ name: "globalFeed" }));
  };

  const loginUser = (credentials) => {
    store
      .dispatch(actionTypes.login, credentials)
      .then(() => router.push({ name: "globalFeed" }));
  };

  const initFormValue = (formFields) => {
    const formValue = {};

    for (const field of formFields) {
      formValue[field.name] = null;
    }

    return reactive(formValue);
  };

  return {
    registerUser,
    loginUser,
    initFormValue,
  };
};
