import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = (): any => ({
  circularProgress: {
    position: "fixed",
    top: "calc(50% - 45px)",
    left: "calc(50% - 45px)",
  },
});

const Loading: React.FC<any> = ({ classes }) => {
  return (
    <CircularProgress
      className={classes.circularProgress}
      size={90}
      thickness={1}
      color="secondary"
    />
  );
};

export default withStyles(styles)(Loading);
