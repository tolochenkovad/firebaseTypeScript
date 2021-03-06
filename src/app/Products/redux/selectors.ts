import { DataProduct } from "../types/types";
import { AppState } from "../../../store/store";

export const getNewProductData = (state: AppState): any => {
  if (state.form.addProduct === undefined) {
    return {};
  } else return state.form.addProduct.values;
};

export const getProductsFirestore = (state: AppState): Array<DataProduct> =>
  state.products.products;

export const getLoadingProducts = (state: AppState): boolean =>
  state.products.loading;
