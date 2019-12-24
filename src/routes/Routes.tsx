import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../common/navbar/Navbar";
import ErrorBoundary from "../common/errors/ErrorBoundary";
import Loading from "../common/loading/Loading";
import { ROUTES } from "./constans";
import ProductsListPage from "../pages/ProductsListPage";
import LoginPage from "../pages/LoginPage";
import ProductsInfoPage from "../pages/ProductInfoPage";
import NotFoundPage from "../pages/NotFoundPage";
import HeadTitle from "../common/title/Title";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <HeadTitle />
          <Switch>
            <Route exact path={ROUTES.main} component={ProductsListPage} />
            <Route path={ROUTES.login} component={LoginPage} />
            <Route path={ROUTES.signUp} component={LoginPage} />
            <Route
              path={ROUTES.dynamic.product()}
              component={ProductsInfoPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
