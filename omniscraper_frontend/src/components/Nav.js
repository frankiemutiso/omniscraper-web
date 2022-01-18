import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import { useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { HideOnScroll } from "./HideOnScroll";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  navLink: {
    textDecoration: "none",
    color: "#fff",
    border: "1px solid #fff",
    backgroundColor: "#000",
  },
  title: {
    "&:hover": {
      color: "#f5f5f7",
    },
    transition: "all 0.5s ease",
  },
});

const Nav = (props) => {
  const { loggedIn, handleLogout } = props;
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  return (
    <div style={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "#000" }}>
          <Toolbar>
            <div
              style={{
                marginRight: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                history.push("/");
                window.scrollTo({ top: 0, behaviour: "smooth" });
              }}
            >
              <Typography
                variant="h6"
                style={{
                  textTransform: "uppercase",
                  // fontStyle: "italic",
                  color: "#fff",
                  textDecoration: "none",
                  marginBottom: -8,
                  fontWeight: 600,
                }}
                className={classes.title}
              >
                Omniscraper
              </Typography>
              <Typography
                className={classes.title}
                variant="caption"
                style={{
                  textTransform: "uppercase",
                  fontSize: 10,
                  letterSpacing: 0.4,
                }}
              >
                smart content delivery
              </Typography>
            </div>

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
