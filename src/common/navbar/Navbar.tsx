import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { ROUTES } from "../../routes/constans";
import { isEmpty } from "react-redux-firebase";
import { connect } from "react-redux";
import { Theme } from "@material-ui/core";
import { getAuth } from "../../app/Auth/redux/selectors";
import { AppAuth } from "../../app/Auth/types/types";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    fontSize: theme.spacing(2),
    background: "#1976d2",
    padding: theme.spacing(2.5, 3.75),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "uppercase",
  },
  link: {
    textDecoration: "none",
    color: "black",
    textTransform: "uppercase",
  },
}));

const Navbar: React.FC<AppAuth> = ({ auth }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.box}>
      <Link className={classes.link} to={ROUTES.main}>
        To the list
      </Link>
      <Grid>{!isEmpty(auth) ? <SignedInLinks /> : <SignedOutLinks />}</Grid>
    </Grid>
  );
};

const mapStateToProps = (state): AppAuth => ({
  auth: getAuth(state),
});

export default connect<AppAuth>(mapStateToProps, {})(Navbar);
