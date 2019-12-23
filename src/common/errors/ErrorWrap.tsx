import React from "react";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { ROUTES } from "../../routes/constans";

const styles = (theme: Theme): any => ({
  errorWrap: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    borderRadius: "50%",
    width: 500,
    height: 500,
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 300,
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    margin: `${theme.spacing(3)}px auto`,
    "& h5": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.2rem",
      },
    },
  },
  title: {
    color: theme.palette.primary.main,
    textShadow: `10px 6px 50px ${theme.palette.primary.main}`,
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      marginBottom: theme.spacing(2),
    },
  },
  deco: {
    boxShadow: theme.shadows[2],
    position: "absolute",
    borderRadius: 2,
  },
  button: {
    marginTop: 24,
  },
  desc: {
    padding: theme.spacing(1),
  },
});

type Props = {
  classes: any;
  title: string;
  desc: string;
};

const ErrorWrap: React.FC<Props> = ({ classes, title, desc }) => (
  <Route
    render={({ staticContext }: any) => {
      if (staticContext) {
        staticContext.status = 404; // eslint-disable-line
      }
      return (
        <Grid className={classes.errorWrap}>
          <Typography className={classes.title} variant="h3">
            {title}
          </Typography>
          <Typography className={classes.desc} variant="subtitle2">
            {desc}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={Link}
            to={ROUTES.main}
          >
            Go To Main Page
          </Button>
        </Grid>
      );
    }}
  />
);

export default withStyles(styles)(ErrorWrap);
