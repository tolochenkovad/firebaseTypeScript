/// <reference no-default-lib="true"/>
import React from "react";
import { connect } from "react-redux";
import { isLoaded, useFirebase, isEmpty } from "react-redux-firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Typography } from "@material-ui/core";
import { ROUTES } from "../../../../routes/constans";
import { Redirect } from "react-router-dom";
import { toastr } from "react-redux-toastr";
import LoginStyles from "./style";
import { getAuth } from "../../redux/selectors";
import { AuthStatus } from "../../interfaces/interfaces";

const onSucessLogin = (): void => {
  toastr.success("Successfully authorized", "");
};

type Props = AuthStatus;

const Login: React.FC<Props> = ({ auth }) => {
  const firebase = useFirebase();
  return (
    <LoginStyles className="box">
      {!isLoaded(auth) ? (
        <span>Loading...</span>
      ) : isEmpty(auth) ? (
        <>
          <Typography variant="h5" className="title">
            You can log in using your social networks!
          </Typography>
          <StyledFirebaseAuth
            uiConfig={{
              signInFlow: "popup",
              signInSuccessUrl: "/login",
              signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
              ],
              callbacks: {
                signInSuccessWithAuthResult: () => onSucessLogin(),
              },
            }}
            firebaseAuth={firebase.auth()}
          />
        </>
      ) : (
        <Redirect to={ROUTES.main} />
      )}
    </LoginStyles>
  );
};

const mapStateToProps = (state): AuthStatus => ({
  auth: getAuth(state),
});

export default connect<AuthStatus, {}, {}, {}>(mapStateToProps, {})(Login);
