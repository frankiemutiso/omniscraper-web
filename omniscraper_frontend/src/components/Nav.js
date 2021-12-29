import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  navLink: {
    textDecoration: "none",
    cursor: "pointer",
    color: "#fff",
    border: "1px solid #fff",
  },
});

const Nav = ({ loggedIn, handleLogout }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div style={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#000" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{
              textTransform: "uppercase",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 18,
              marginRight: "auto",
            }}
            onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
          >
            Omniscraper
          </Typography>

          <div>
            {loggedIn && (
              <React.Fragment>
                <Button
                  size="small"
                  variant="outlined"
                  component={Link}
                  to="/"
                  className={classes.navLink}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </React.Fragment>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default React.memo(Nav);
