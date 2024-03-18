<script setup lang="ts">
import ContentWrapper from "@/components/ui/ContentWrapper.vue";
import LoginForm from "@/components/login/LoginForm.vue";
</script>

<template>
  <ContentWrapper class="login">
    <div class="login__wrapper">
      <h2 class="login__title">Авторизация</h2>
      <LoginForm />
    </div>
  </ContentWrapper>
</template>

<style lang="scss" scoped>
.login {
  padding-block-end: 24px;

  &__wrapper {
    display: grid;
    grid-gap: 20px 0;
  }

  &__title {
    font-size: 24px;
  }
}
</style>
