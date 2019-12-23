import { AppProductState } from "../app/Products/types/types";
import { AppAuth } from "../app/Auth/types/types";

export type AppState = {
  products: AppProductState;
  form: {
    addProduct: {
      values: object;
    };
  };
  firebase: AppAuth;
};
