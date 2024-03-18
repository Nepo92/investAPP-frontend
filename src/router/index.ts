import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Login",
    path: "/login",
    component: () => import("@/pages/LoginPage.vue"),
  },
  {
    name: "Main",
    path: "/",
    component: () => import("@/pages/MainPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
