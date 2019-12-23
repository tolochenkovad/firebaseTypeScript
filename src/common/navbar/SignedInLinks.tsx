import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { ROUTES } from "../../routes/constans";
import { useFirebase } from "react-redux-firebase";
import { toastr } from "react-redux-toastr";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme): any => ({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "uppercase",
  },
  link: {
    textDecoration: "none",
    color: "black",
    marginLeft: theme.spacing(6.25),
  },
}));

const SignedInLinks: React.FC = () => {
  const firebase = useFirebase();

  const logout = async () => {
    await firebase.auth().signOut();
    toastr.success("You are log out!", "");
  };

  const classes: any = useStyles();
  return (
    <NavLink className={classes.link} onClick={logout} to={ROUTES.main}>
      Log Out
    </NavLink>
  );
};

export default SignedInLinks;
