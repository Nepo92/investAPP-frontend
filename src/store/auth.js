import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const { VUE_APP_BACKEND_URI } = process.env;

export const useAuthStore = defineStore("auth-store", () => {
  const state = reactive({
    isAuth: false,
  });

  const isAuth = computed(() => state.isAuth);

  async function checkAuth() {
    const { isAuth } = await axios.get(`${VUE_APP_BACKEND_URI}/me`);

    state.isAuth = isAuth;
  }

  return {
    isAuth,
    checkAuth,
  };
});
