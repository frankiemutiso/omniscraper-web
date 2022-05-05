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
import { connect } from "react-redux";
import "./Login.css";
import { loginUser } from '../store/actions/usersActions'

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
    username: "",
    password: "",
  };

  handleClickShowPassword = (event) => {
    event.preventDefault();
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = async (e) => {
    const { handleRedirectionDelay } = this;
    const { username, password } = this.state;
    const { loginUser } = this.props;

    e.preventDefault();

    await loginUser(username, password);

    if (this.props.loggedIn === true) {
      this.setState({ successfulLogin: true }, () => handleRedirectionDelay());
    }
  };

  handleRedirectionDelay = () => {
    setTimeout(
      () =>
        this.setState({
          username: "",
          password: "",
        }),
      2500
    );
  };

  render() {
    const { classes, loginLoading, error, loginError } = this.props;

    const { showPassword, username, password } = this.state;

    const {
      handleClickShowPassword,
      handleMouseDownPassword,
      handleLogin,
      handleChange,
    } = this;

    return (
      <div
        style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}
      >
        <Paper elevation={0} className={classes.paper} square>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {loginError.length > 0 && (
            <p className='login__error-text'>{loginError}</p>
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

          <form className={classes.form} noValidate onSubmit={handleLogin}>
            <Textfield
              error={error}
              type='text'
              id='username'
              placeholder='Username'
              name='username'
              value={username}
              required='required'
              autoComplete='on'
              autoFocus
              onChange={handleChange}
              style={{ width: "100%", marginBottom: 16 }}
            />
            <div style={{ position: "relative" }}>
              <Textfield
                error={error}
                type={showPassword ? "text" : "password"}
                id='password'
                value={password}
                onChange={handleChange}
                placeholder='Password'
                name='password'
                required
                autoComplete='on'
                style={{
                  width: "100%",
                  marginBottom: 16,
                }}
              />
              <Button
                type='icon'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                style={{
                  position: "absolute",
                  top: "15%",
                  right: 16,
                }}
              >
                {showPassword ? (
                  <Visibility color='primary' style={{ fontSize: 18 }} />
                ) : (
                  <VisibilityOff color='primary' style={{ fontSize: 18 }} />
                )}
              </Button>
            </div>

            <Button
              onClick={() => handleLogin()}
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
const mapStateToProps = (state) => {
  return { ...state.users };
};
const mapDispatchToProps = { loginUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
