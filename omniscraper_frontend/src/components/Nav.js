import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import { useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { HideOnScroll } from "./HideOnScroll";
import logo from "../assets/omniscraperLogo.png";
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
  toolbarRoot: { height: 64, paddingLeft: 0 },
  logo: {
    width: 72,
    maxWidth: "100%",
    height: "auto",
    marginLeft: -16,
    marginRight: -10,
  },
});

const Nav = (props) => {
  const { loggedIn, handleLogout } = props;
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar
        style={{ backgroundColor: "#000" }}
        classes={{ root: classes.toolbarRoot }}
      >
        <Toolbar>
          <div
            style={{
              marginRight: "auto",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              height: 64,
            }}
            classes={{ root: classes.toolbarRoot }}
            onClick={() => {
              history.push("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={logo} alt="Omniscraper Logo" className={classes.logo} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
    </div>
  );
};

export default React.memo(Nav);
