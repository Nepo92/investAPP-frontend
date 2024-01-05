import { useAuthStore } from "@/store/auth";

export async function authGuard(to, from, next) {
  try {
    if (to.name === "Login") next();
    else {
      await makeStatusRequest(to, next);
    }
  } catch (e) {
    if (to.name !== "Login") next({ name: "Login" });
  }
}

async function makeStatusRequest(to, next) {
  const { checkAuth, isAuth } = useAuthStore();

  await checkAuth();

  if (isAuth) next();
  else next({ name: "Login" });
}
