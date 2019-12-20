import { all, spawn } from "redux-saga/effects";
import productsSaga from "../app/Products/redux/saga";

function* rootSaga() {
  yield all([spawn(productsSaga)]);
}

export default rootSaga;
