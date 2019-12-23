import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_REQUEST,
  DELETE_PRODUCT_FAILED,
  DELETE_PRODUCT_REQUEST,
  SET_PRODUCTS_FAILED,
  SET_PRODUCTS_REQUEST,
  SET_PRODUCTS_SUCCESS,
} from "./types";
import { DataProduct } from "../types/types";

export const setProductsRequestAction = () => ({
  type: SET_PRODUCTS_REQUEST,
});

export const setProductsSuccessAction = (data: DataProduct[]) => ({
  type: SET_PRODUCTS_SUCCESS,
  payload: data,
});

export const setProductsErrorAction = (error: string) => ({
  type: SET_PRODUCTS_FAILED,
  payload: error,
});

export const deleteProductRequestAction = (id: string) => ({
  type: DELETE_PRODUCT_REQUEST,
  payload: id,
});

export const deleteProductErrorAction = (error: string) => ({
  type: DELETE_PRODUCT_FAILED,
  payload: error,
});

export const addProductRequestAction = () => ({
  type: ADD_PRODUCT_REQUEST,
});

export const addProductErrorAction = (error: string) => ({
  type: ADD_PRODUCT_FAILED,
  payload: error,
});

export type Actions =
  | ReturnType<typeof setProductsRequestAction>
  | ReturnType<typeof setProductsSuccessAction>
  | ReturnType<typeof setProductsErrorAction>
  | ReturnType<typeof deleteProductRequestAction>
  | ReturnType<typeof deleteProductErrorAction>
  | ReturnType<typeof addProductRequestAction>
  | ReturnType<typeof addProductErrorAction>;
