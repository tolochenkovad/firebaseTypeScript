import { AppState } from "../../../types/types";

export const getAuth = (state: AppState) => state.firebase.auth;
