import { combineReducers, Reducer } from "redux";
import productListReducer from "../app/Products/redux/reducer";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import { firebaseReducer } from "react-redux-firebase";
import { AppAuth } from "../app/Auth/types/types";

const reducers = combineReducers({
  products: productListReducer,
  firebase: firebaseReducer as Reducer<AppAuth>,
  toastr: toastrReducer,
  form: formReducer,
});

export default reducers;
