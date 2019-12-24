import { LOGIN_REQUEST, LOGOUT_REQUEST, SIGN_UP_REQUEST } from "./types";
import { takeLatest, put, call } from "redux-saga/effects";
import { reset, startSubmit, stopSubmit } from "redux-form";
import { FORM } from "../../../constans/constans";
import { getFirebase } from "react-redux-firebase";
import { toastr } from "react-redux-toastr";
import * as actions from "./actions";

function* firebaseSignup(action: ReturnType<typeof actions.signUpRequest>) {
  try {
    yield put(startSubmit(FORM.signUP));
    const { email, username, password } = action.payload;
    const userSettings = {
      displayName: username,
      photoURL: null,
    };
    yield call(
      getFirebase().createUser,
      { email, password },
      { username, email }
    );
    yield call(getFirebase().updateAuth, userSettings);
    yield call(() => toastr.success("Successfully sign up", ""));
    yield put(stopSubmit(FORM.signUP));
    yield put(reset(FORM.signUP));
  } catch (error) {
    yield call(() => toastr.error(error.message, ""));
    if (error.code.includes("email")) {
      yield put(stopSubmit(FORM.signUP, { email: error.message }));
    } else if (error.code.includes("password")) {
      yield put(stopSubmit(FORM.signUP, { password: error.message }));
    } else {
      yield put(stopSubmit(FORM.signUP, { _error: error.message }));
    }
  }
}

function* firebaseLogin(action: ReturnType<typeof actions.loginRequest>) {
  try {
    yield put(startSubmit(FORM.login));
    yield call(getFirebase().login, action.payload);
    yield call(() => toastr.success("Successfully authorized", ""));
    yield put(stopSubmit(FORM.login));
    yield put(reset(FORM.login));
  } catch (error) {
    yield call(() => toastr.error(error.message, ""));
    if (error.code.includes("email")) {
      yield put(stopSubmit(FORM.login, { email: error.message }));
    } else if (error.code.includes("password")) {
      yield put(stopSubmit(FORM.login, { password: error.message }));
    } else {
      yield put(stopSubmit(FORM.login, { _error: error.message }));
    }
  }
}

function* firebaseLogout() {
  try {
    yield call(getFirebase().logout);
    yield call(() => toastr.success("You are logout", ""));
  } catch (error) {
    yield call(() => toastr.error(error.message, ""));
  }
}

function* authSaga() {
  yield takeLatest(SIGN_UP_REQUEST, firebaseSignup);
  yield takeLatest(LOGIN_REQUEST, firebaseLogin);
  yield takeLatest(LOGOUT_REQUEST, firebaseLogout);
}

export default authSaga;
