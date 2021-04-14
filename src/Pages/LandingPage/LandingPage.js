import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ViewList as ViewListIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  let history = useHistory();

  const loginClick = () => {
    history.push("/login");
  };

  return (
    <div>
      <CssBaseline />
      <div style={{ display: "flex", flexGrow: 1, textAlign: "start" }}>
        <AppBar position="relative" style={{ backgroundColor: "teal" }}>
          <Toolbar>
            <ViewListIcon className={classes.icon} />
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Learning By Doing / Landing Page
            </Typography>
            <Button color="inherit" onClick={loginClick}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default LandingPage;
