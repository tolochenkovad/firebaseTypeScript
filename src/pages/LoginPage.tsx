import React, { lazy } from "react";

const Login = lazy(() => import("../app/Auth/components/Login/Login"));

const LoginPage: React.FC = () => <Login />;

export default LoginPage;
