import { createRouter, createWebHistory } from "vue-router";

import { authGuard } from "@/utils/auth-guard";

export const routes = [
  {
    name: "Login",
    path: "/login",
    component: () => import("@/layouts/Login-layout.vue"),
  },
  {
    name: "Main",
    path: "/",
    component: () => import("@/layouts/Main-layout.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeResolve(authGuard);
