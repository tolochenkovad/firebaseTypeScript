/// <reference no-default-lib="true"/>
import { StyledFirebaseAuth } from "react-firebaseui";
import React from "react";
import { useFirebase } from "react-redux-firebase";
import { toastr } from "react-redux-toastr";

const Social = () => {
  const firebase = useFirebase();
  const onSucessSocialLogin = (): void => {
    toastr.success("Successfully authorized", "");
  };
  return (
    <StyledFirebaseAuth
      uiConfig={{
        signInFlow: "popup",
        signInSuccessUrl: "/login",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccessWithAuthResult: () => onSucessSocialLogin(),
        },
      }}
      firebaseAuth={firebase.auth()}
    />
  );
};

export default Social;
