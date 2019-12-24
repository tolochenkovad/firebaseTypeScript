import { LOGIN_REQUEST, LOGOUT_REQUEST, SIGN_UP_REQUEST } from "./types";
import { LoginProps, SignUpProps } from "../types/types";

export const signUpRequest = (payload: SignUpProps) => ({
  type: SIGN_UP_REQUEST,
  payload,
});

export const loginRequest = (payload: LoginProps) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export type Actions =
  | ReturnType<typeof signUpRequest>
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof logoutRequest>;
