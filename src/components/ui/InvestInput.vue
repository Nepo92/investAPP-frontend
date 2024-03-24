<script setup lang="ts">
import { computed } from "vue";

interface InputProps {
  type?: string;
  placeholder: string;
  value: {
    [index: string]: string | undefined;
  };
  name?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
});

const emits = defineEmits(["input"]);

const type = computed(() => props.type);
const model = computed(() => props.value);
</script>

<template>
  <input
    class="input"
    autocomplete="off"
    :type="type"
    :name="props.name"
    v-model="model.value"
    :placeholder="props.placeholder"
  />
</template>

<style lang="scss" scoped>
.input {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: $input-bg;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  outline: none;

  &::placeholder {
    color: $input-placeholder;
  }
}
</style>
