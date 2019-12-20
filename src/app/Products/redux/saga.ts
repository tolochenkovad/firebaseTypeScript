import { takeLatest, put, call, select } from "redux-saga/effects";
import {
  addDoc,
  deleteDoc,
  fetchCollection,
  getShapShot,
} from "../../../api/firebase/firebaseApi";
import { getNewProductData } from "./selectors";
import { toastr } from "react-redux-toastr";
import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_REQUEST,
  DELETE_PRODUCT_FAILED,
  DELETE_PRODUCT_REQUEST,
  SET_PRODUCTS_FAILED,
  SET_PRODUCTS_REQUEST,
  SET_PRODUCTS_SUCCESS,
} from "./types";
import { DataProduct, DeleteProductAction } from "../interfaces/interfaces";
import { firebaseState } from "../../../constans/constans";

function* setProducts() {
  try {
    const snapShot = yield call(() => getShapShot(firebaseState.products));
    const allProducts = yield call(() => fetchCollection(snapShot));
    yield put({
      type: SET_PRODUCTS_SUCCESS,
      payload: allProducts,
    });
  } catch (error) {
    yield call(() => toastr.error(error.message, ""));
    yield put({
      type: SET_PRODUCTS_FAILED,
      error: error.message,
    });
  }
}

function* deleteProduct({ payload }: DeleteProductAction) {
  try {
    yield call(() => deleteDoc(firebaseState.products, payload));
    yield call(() => toastr.success("Successfully removed", ""));
    yield put({
      type: SET_PRODUCTS_REQUEST,
    });
  } catch (error) {
    yield call(() => toastr.error(error.message, ""));
    yield put({
      type: DELETE_PRODUCT_FAILED,
      error: error.message,
    });
  }
}

function* addProduct() {
  try {
    const productFormData = yield select(getNewProductData);
    const newProduct: DataProduct = {
      img: productFormData.img,
      title: productFormData.title,
      description: productFormData.description,
      date: productFormData.date,
      price: productFormData.price,
      location: productFormData.location,
    };
    yield call(() => addDoc(firebaseState.products, newProduct));
    yield call(() => toastr.success("Successfully added", ""));
    yield put({
      type: SET_PRODUCTS_REQUEST,
    });
  } catch (error) {
    yield call(() => toastr.error(error.message, ""));
    yield put({
      type: ADD_PRODUCT_FAILED,
      error: error.message,
    });
  }
}

function* productsSaga() {
  yield takeLatest(SET_PRODUCTS_REQUEST, setProducts);
  yield takeLatest(DELETE_PRODUCT_REQUEST, deleteProduct);
  yield takeLatest(ADD_PRODUCT_REQUEST, addProduct);
}

export default productsSaga;
