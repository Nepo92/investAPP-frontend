export interface LoginField {
  name: string;
  value?: string;
}

export interface LoginForm extends LoginField {
  type?: "text" | "password";
}
