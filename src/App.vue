<script setup lang="ts"></script>

<template>
  <div class="invest-app">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.invest-app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100svw;
  height: 100%;
  min-height: 100svh;
  padding: 15px;
}
</style>
