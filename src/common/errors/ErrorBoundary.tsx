import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

interface State {
  hasEror?: boolean;
  error: string | null;
}

class ErrorBoundary extends Component<any, State> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { children } = this.props;
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <Grid>
          <Grid
            style={{
              textAlign: "center",
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <Typography variant="h4">Something went wrong.</Typography>
            <Typography variant="h6">Error: {error}</Typography>
          </Grid>
        </Grid>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
