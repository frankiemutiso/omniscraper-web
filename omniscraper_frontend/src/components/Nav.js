import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/omniscraperLogo.svg";
import { useHistory } from "react-router-dom";
import Button from "./reusableComponents/Button";
import "./Nav.css";

const Nav = (props) => {
  const { loggedIn, handleLogout } = props;
  const history = useHistory();

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#000" }}>
        <Toolbar>
          <div
            style={{
              marginRight: "auto",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              height: 64,
            }}
            onClick={() => {
              history.push("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={logo} alt="Omniscraper Logo" className="logo" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: -7,
              }}
            >
              <p
                variant="subtitle1"
                style={{
                  textTransform: "uppercase",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                  letterSpacing: 0.1,
                  fontFamily: "Sora",
                }}
                className="title"
              >
                Omniscraper
              </p>
              <p
                className="title"
                style={{
                  textTransform: "uppercase",
                  fontSize: 8,
                  letterSpacing: 0.6,
                  fontFamily: "Sora",
                }}
              >
                smart content delivery
              </p>
            </div>
          </div>

          <div>
            {loggedIn && (
              <React.Fragment>
                <Button type="default" onClick={() => handleLogout()}>
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
