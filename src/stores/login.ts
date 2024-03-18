import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

import { LoginField, LoginState } from "@/types/login";

const useLoginStore = defineStore("login", () => {
  const state: LoginState = reactive({
    form: [
      {
        name: "Логин",
        value: "",
        type: "text",
      },
      {
        name: "Пароль",
        value: "",
        type: "password",
      },
    ],
    login: {
      __fetching: false,
      __error: false,
      __success: false,
    },
  });

  const form = computed(() => state.form);
  const login = computed(() => state.login);
  const formIsEmpty = computed(() => form.value.some((input) => !input.value));
  const loginField = computed(() => state.form.at(0));
  const passwordField = computed(() => state.form.at(1));

  function updateField({ name, value }: LoginField) {
    const currentField = form.value.find((field) => field.name === name);

    if (currentField) currentField.value = value;
  }

  async function loginRequest() {
    try {
      login.value.__fetching = true;

      const body = {
        login: loginField.value?.value,
        password: passwordField.value?.value,
      };

      await axios.post("/api/login", JSON.stringify(body));

      login.value.__success = true;
      login.value.__error = false;
    } catch (e) {
      login.value.__success = false;
      login.value.__error = true;

      throw new Error(e.message);
    } finally {
      login.value.__fetching = false;
    }
  }

  return {
    form,
    formIsEmpty,

    updateField,
    loginRequest,
  };
});

export default useLoginStore;
