import { takeLatest, put, call, select, take } from "redux-saga/effects";
import {
  addDoc,
  deleteDoc,
  fetchCollection,
} from "../../../api/firebase/firebaseApi";
import { getNewProductData } from "./selectors";
import { toastr } from "react-redux-toastr";
import {
  ADD_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  SET_PRODUCTS_REQUEST,
} from "./types";
import { DataProduct } from "../types/types";
import { COLLECTIONS } from "../../../constans/constans";
import * as actions from "./actions";
import { eventChannel } from "redux-saga";

function createItemsChannel() {
  return eventChannel(emit => {
    fetchCollection(COLLECTIONS.products).onSnapshot(
      querySnapshot => {
        const items: unknown[] = [];
        querySnapshot.forEach((doc: any) => {
          items.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        emit(items);
      },
      () => emit(false)
    );
    return () => {};
  });
}

function* setProducts() {
  try {
    const channel = yield call(createItemsChannel);
    while (true) {
      const data = yield take(channel);
      yield put(actions.setProductsSuccessAction(data));
    }
  } catch (error) {
    yield call(() => toastr.error(error.message, ""));
    yield put(actions.setProductsErrorAction(error));
  }
}

function* deleteProduct(
  action: ReturnType<typeof actions.deleteProductRequestAction>
) {
  try {
    yield call(() => deleteDoc(COLLECTIONS.products, action.payload));
    yield call(() => toastr.success("Successfully removed", ""));
  } catch (error) {
    yield call(() => toastr.error(error.message, ""));
    yield put(actions.deleteProductErrorAction(error.message));
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
    yield call(() => addDoc(COLLECTIONS.products, newProduct));
    yield call(() => toastr.success("Successfully added", ""));
  } catch (error) {
    yield call(() => toastr.error(error.message, ""));
    yield put(actions.addProductErrorAction(error.message));
  }
}

function* productsSaga() {
  yield takeLatest(SET_PRODUCTS_REQUEST, setProducts);
  yield takeLatest(DELETE_PRODUCT_REQUEST, deleteProduct);
  yield takeLatest(ADD_PRODUCT_REQUEST, addProduct);
}

export default productsSaga;
