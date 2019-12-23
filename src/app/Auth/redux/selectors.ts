import { AppState } from "../../../store/store";

export const getAuth = (state: AppState) => state.firebase.auth;
