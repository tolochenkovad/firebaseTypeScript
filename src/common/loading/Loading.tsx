import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  circularProgress: {
    position: "fixed",
    top: "calc(50% - 45px)",
    left: "calc(50% - 45px)",
  },
}));

const Loading: React.FC = () => {
  const classes = useStyles();
  return (
    <CircularProgress
      className={classes.circularProgress}
      size={90}
      thickness={1}
      color="secondary"
    />
  );
};

export default Loading;
