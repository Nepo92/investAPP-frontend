<script setup lang="ts">
import { computed } from "vue";

interface InputProps {
  type?: "text" | "password";
  placeholder: string;
  value?: string;
  name?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
});

const emits = defineEmits(["input"]);

const type = computed(() => props.type);
const value = computed(() => props.value);

function updateInput(e: Event) {
  const t = e.target as HTMLInputElement;

  emits("input", {
    name: props.name,
    value: t.value,
  });
}
</script>

<template>
  <input
    class="input"
    autocomplete="off"
    :type="type"
    :name="props.name"
    :value="value"
    :placeholder="props.placeholder"
    @input="updateInput"
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
