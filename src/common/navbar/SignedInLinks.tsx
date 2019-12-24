import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { ROUTES } from "../../routes/constans";
import { Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { getAuth } from "../../app/Auth/redux/selectors";
import { connect } from "react-redux";
import { AppAuth } from "../../app/Auth/types/types";
import Grid from "@material-ui/core/Grid";
import { logoutRequest } from "../../app/Auth/redux/actions";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "16px",
    textTransform: "uppercase",
  },
  name: {
    fontSize: "16px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    marginLeft: theme.spacing(6.25),
  },
}));

type Props = AppAuth & DispatchProps;

const SignedInLinks: React.FC<Props> = ({ auth, logoutRequest }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.box}>
      {auth.displayName && (
        <Typography className={classes.name}>
          Welcome, {auth.displayName}
        </Typography>
      )}

      <NavLink
        className={classes.link}
        onClick={logoutRequest}
        to={ROUTES.main}
      >
        Log Out
      </NavLink>
    </Grid>
  );
};

type DispatchProps = {
  logoutRequest: () => void;
};

const mapStateToProps = state => ({
  auth: getAuth(state),
});

export default connect<AppAuth, DispatchProps>(mapStateToProps, {
  logoutRequest,
})(SignedInLinks);
