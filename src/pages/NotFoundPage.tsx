import React from "react";
import { Route } from "react-router-dom";
import ErrorWrap from "../common/errors/ErrorWrap";
import Grid from "@material-ui/core/Grid";

const NotFoundPage: React.FC = () => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = 404;
      }
      return (
        <Grid>
          <ErrorWrap title="404" desc="Oops, Page Not Found :(" />
        </Grid>
      );
    }}
  />
);

export default NotFoundPage;
