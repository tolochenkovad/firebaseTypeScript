import { combineReducers } from "redux";
import productListReducer from "../app/Products/redux/reducer";
import { reducer as formReducer } from "redux-form";
import { firebaseReducer } from "react-redux-firebase";
import { reducer as toastrReducer } from "react-redux-toastr";

const reducers = combineReducers({
  products: productListReducer,
  firebase: firebaseReducer,
  toastr: toastrReducer,
  form: formReducer,
});

export default reducers;
