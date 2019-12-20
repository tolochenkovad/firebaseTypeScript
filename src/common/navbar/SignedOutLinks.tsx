import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { ROUTES } from "../../routes/constans";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme): any => ({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
    color: "black",
    marginLeft: theme.spacing(6.25),
  },
}));

const SignedOutLinks: React.FC = () => {
  const classes: any = useStyles();

  return (
    <Grid className={classes.box}>
      <NavLink className={classes.link} to={ROUTES.login}>
        Login
      </NavLink>
    </Grid>
  );
};

export default SignedOutLinks;
