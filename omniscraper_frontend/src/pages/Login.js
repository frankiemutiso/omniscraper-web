import React, { PureComponent } from "react";

import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Textfield from "../components/reusableComponents/Textfield";
import withStyles from "@mui/styles/withStyles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Paper from "@mui/material/Paper";
import Button from "../components/reusableComponents/Button";
import "./Login.css";

const styles = (theme) => ({
  paper: {
    padding: 24,
    paddingBottom: 40,
    margin: "auto",
    width: "40vw",
    [theme.breakpoints.down("md")]: { width: "80vw" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    marginTop: theme.spacing(1),
    marginBottom: 8,
    backgroundColor: "black",
  },
  successAvatar: {
    marginTop: theme.spacing(1),
    marginBottom: 16,
    backgroundColor: "#1DB954",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
});

export class Login extends PureComponent {
  state = {
    showPassword: false,
  };

  handleClickShowPassword = (event) => {
    event.preventDefault();
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  render() {
    const {
      classes,
      handleChange,
      handleSubmit,
      username,
      password,
      loginLoading,
      error,
      successfulLogin,
    } = this.props;

    const { showPassword } = this.state;

    const { handleClickShowPassword, handleMouseDownPassword } = this;

    return (
      <div
        style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}
      >
        <Paper elevation={0} className={classes.paper} square elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {successfulLogin ? (
            <p className="login__success-text">
              You have successfully logged in.
            </p>
          ) : (
            <p className="login__error-text">{error}</p>
          )}

          <h4
            style={{
              color: "#1a1c20",
              textTransform: "uppercase",
              fontFamily: "inherit",
              letterSpacing: "0.1em",
              marginBottom: 8,
            }}
          >
            Log In To Omniscraper
          </h4>

          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Textfield
              error={error}
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              value={username}
              required="required"
              autoComplete="on"
              autoFocus
              onChange={handleChange}
              style={{ width: "100%", marginBottom: 16 }}
            />
            <div style={{ position: "relative" }}>
              <Textfield
                error={error}
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                name="password"
                required
                autoComplete="on"
                style={{
                  width: "100%",
                  marginBottom: 16,
                }}
              />
              <Button
                type="icon"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                style={{
                  position: "absolute",
                  top: "15%",
                  right: 16,
                }}
              >
                {showPassword ? (
                  <Visibility color="primary" style={{ fontSize: 18 }} />
                ) : (
                  <VisibilityOff color="primary" style={{ fontSize: 18 }} />
                )}
              </Button>
            </div>

            <Button
              onClick={() => handleSubmit()}
              style={{ marginTop: 16, width: "100%" }}
              endIcon={
                loginLoading ? (
                  <CircularProgress size={12} style={{ color: "white" }} />
                ) : (
                  ""
                )
              }
            >
              Log In
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
