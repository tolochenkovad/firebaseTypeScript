import React from "react";
import { connect } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { Typography } from "@material-ui/core";
import { ROUTES } from "../../../routes/constans";
import { Redirect } from "react-router-dom";
import LoginStyles from "./style";
import { getAuth } from "../redux/selectors";
import { AppAuth } from "../types/types";
import LoginForm from "../components/Login/Login";
import Social from "../components/Social/Socail";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import SignUp from "../components/SignUp/SignUp";
import { loginRequest, signUpRequest } from "../redux/actions";

type RouteProps = {
  location: {
    pathname: string;
  };
};

type Props = AppAuth & RouteProps & DispatchProps;

const Auth: React.FC<Props> = ({
  auth,
  location,
  signUpRequest,
  loginRequest,
}) => {
  return (
    <LoginStyles className="box">
      {!isLoaded(auth) ? (
        <span>Loading...</span>
      ) : isEmpty(auth) ? (
        <>
          {location.pathname === "/login" ? (
            <LoginForm onSubmit={loginRequest} />
          ) : (
            <SignUp onSubmit={signUpRequest} />
          )}

          <Typography variant={"h6"} className={"title"}>
            Or you can login using your social networks:
          </Typography>
          <Social />
        </>
      ) : (
        <Redirect to={ROUTES.main} />
      )}
    </LoginStyles>
  );
};

const mapStateToProps = (state): AppAuth => ({
  auth: getAuth(state),
});

type DispatchProps = {
  signUpRequest: ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => void;
  loginRequest: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => void;
};

export default compose<any>(
  withRouter,
  connect(mapStateToProps, { signUpRequest, loginRequest })
)(Auth);
