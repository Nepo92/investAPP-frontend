import { RequestState } from "@/types/request";

export interface LoginState {
  form: LoginForm[];
  login: RequestState;
}

export interface LoginField {
  name: string;
  value?: string;
}

export interface LoginForm extends LoginField {
  type?: string;
  [index: string]: string | undefined;
}
