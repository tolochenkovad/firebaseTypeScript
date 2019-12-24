import React, { lazy } from "react";

const Login = lazy(() => import("../app/Auth/container/Auth"));

const LoginPage: React.FC = () => <Login />;

export default LoginPage;
