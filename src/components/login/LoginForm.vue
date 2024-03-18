<script setup lang="ts">
import { computed } from "vue";

import useLoginStore from "@/stores/login";

import InvestInput from "@/components/ui/InvestInput.vue";

import { LoginField } from "@/types/login";

const loginStore = useLoginStore();

const loginForm = computed(() => loginStore.form);
const formIsEmpty = computed(() => loginStore.formIsEmpty);

function typeData(field: LoginField) {
  loginStore.updateField(field);
}

async function tryToLogin() {
  await loginStore.loginRequest();
}
</script>

<template>
  <form @submit.prevent="tryToLogin" class="login__form">
    <div class="login-form__fields">
      <div
        v-for="(item, index) in loginForm"
        :key="index + '-login-field'"
        class="login-form__item"
      >
        <p class="login-form__name">{{ item.name }}:</p>
        <InvestInput
          :name="item.name"
          ref="inputs"
          :type="item.type"
          class="login-form__input"
          :placeholder="item.name"
          :value="item.value"
          @input="typeData"
        />
      </div>
    </div>
    <button type="submit" class="login-form__login-btn" :disabled="formIsEmpty">
      Войти
    </button>
  </form>
</template>

<style lang="scss" scoped>
.login {
  &__form {
    display: grid;
    gap: 18px 0;
  }
}

.login-form {
  &__fields {
    display: grid;
    grid-auto-flow: row;
    gap: 14px 0;
  }

  &__item {
    display: grid;
    grid-gap: 5px 0;
  }

  &__name {
    font-size: 16px;
  }

  &__login-btn {
    display: block;
    margin-inline-start: auto;
    background-color: $login-btn;
    color: $white;
    font-size: 16px;
    line-height: 23px;
    padding: 6px 28px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s linear;

    &:disabled {
      background-color: $input-placeholder;
      cursor: default;
    }
  }
}
</style>
