import {
  ADD_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  SET_PRODUCTS_REQUEST,
} from "./types";
import {
  AddProductAction,
  DeleteProductAction,
  SetProductionAction
} from "../interfaces/interfaces";

export const setProductsAction = (): SetProductionAction => ({
  type: SET_PRODUCTS_REQUEST,
});

export const deleteProductAction = (id: string): DeleteProductAction => ({
  type: DELETE_PRODUCT_REQUEST,
  payload: id,
});

export const addProductAction = (): AddProductAction => ({
  type: ADD_PRODUCT_REQUEST,
});


