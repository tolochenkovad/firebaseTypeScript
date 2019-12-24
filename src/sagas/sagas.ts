import { all, spawn } from "redux-saga/effects";
import productsSaga from "../app/Products/redux/saga";
import authSaga from "../app/Auth/redux/saga";

function* rootSaga() {
  yield all([spawn(productsSaga), spawn(authSaga)]);
}

export default rootSaga;
