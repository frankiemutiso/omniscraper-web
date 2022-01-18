import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import { useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { HideOnScroll } from "./HideOnScroll";

const useStyles = makeStyles({
  navLink: {
    textDecoration: "none",
    cursor: "pointer",
    color: "#fff",
    border: "1px solid #fff",
    backgroundColor: "#000",
  },
});

const Nav = (props) => {
  const { loggedIn, handleLogout } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div style={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "#000" }}>
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
                // fontSize: 18,
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
                    color="white"
                    component={Link}
                    to="/"
                    // className={classes.navLink}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </React.Fragment>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default React.memo(Nav);
