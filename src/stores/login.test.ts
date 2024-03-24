import { describe, it, expect, beforeEach } from "vitest";
import useLoginStore from "./login";
import { computed } from "vue";
import { createPinia, setActivePinia } from "pinia";

describe("Страница логина", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Форма логина не пустая", () => {
    const loginStore = useLoginStore();

    loginStore.updateField({ name: "Логин", value: "login" });
    loginStore.updateField({ name: "Пароль", value: "password" });

    const isEmpty = computed(() => loginStore.formIsEmpty);

    expect(isEmpty.value).toBe(false);
  });

  it("Кнопка входа правильно задизэйблена", () => {
    const loginStore = useLoginStore();

    loginStore.updateField({ name: "Логин", value: "" });
    loginStore.updateField({ name: "Пароль", value: "password" });

    const isEmpty = computed(() => loginStore.formIsEmpty);

    expect(isEmpty.value).toBe(true);

    loginStore.updateField({ name: "Логин", value: "" });
    loginStore.updateField({ name: "Пароль", value: "" });

    const isEmptyForm = computed(() => loginStore.formIsEmpty);

    expect(isEmptyForm.value).toBe(true);
  });
});
