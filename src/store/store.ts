import { createStore, applyMiddleware, compose, Store } from "redux";
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
import { AppState } from "../interfaces/interfaces";

firebase.initializeApp(firebaseConfig);

const sagaMiddleware = createSagaMiddleware();
const store: Store<AppState> = createStore(
  reducers,
  composeWithDevTools(
    compose(reduxFirestore(firebase), applyMiddleware(sagaMiddleware))
  )
);

sagaMiddleware.run(rootSaga);
export default store;
