import { AppProductState } from "../app/Products/interfaces/interfaces";
import { AppAuth } from "../app/Auth/interfaces/interfaces";

export interface AppAction {
  type: string;
  payload?: any;
}

export interface AppState {
  products: AppProductState;
  form: {
    addProduct: {
      values: object;
    };
  };
  firebase: AppAuth;
}
