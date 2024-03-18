<script setup lang="ts"></script>

<template>
  <div class="content-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  width: 100%;
  height: max-content;
  padding: 20px 15px;
  border-radius: 10px;
  background-color: $white;
  box-shadow: $content-wrapper-shadow;
}
</style>
