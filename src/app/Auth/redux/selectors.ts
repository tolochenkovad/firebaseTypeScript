import { AppState } from "../../../interfaces/interfaces";

export const getAuth = (state: AppState): object => state.firebase.auth;
