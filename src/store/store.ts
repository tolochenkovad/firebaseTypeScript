import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers/reducers";
import rootSaga from "../sagas/sagas";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import { firebaseConfig } from "../api/firebase";
import { reduxFirestore } from "redux-firestore";

export type AppState = ReturnType<typeof reducers>;

firebase.initializeApp(firebaseConfig);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(
    compose(reduxFirestore(firebase), applyMiddleware(sagaMiddleware))
  )
);

sagaMiddleware.run(rootSaga);
export default store;
