import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./lib/material-ui/theme";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "firebase/app";
import store from "./store/store";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <CssBaseline>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </CssBaseline>
      </ReactReduxFirebaseProvider>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        closeOnToastrClick
      />
    </Provider>
  );
};

export default App;
