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
import { Actions } from "./actions";

const initialState = {
  products: [] as DataProduct[],
  loading: false,
  error: null as string | null,
};

const productListReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_PRODUCTS_REQUEST:
    case DELETE_PRODUCT_REQUEST:
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_PRODUCTS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        products: payload,
        loading: false,
      };
    }
    case SET_PRODUCTS_FAILED:
    case DELETE_PRODUCT_FAILED:
    case ADD_PRODUCT_FAILED: {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};

export default productListReducer;
