import React, { PureComponent } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import withStyles from "@mui/styles/withStyles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import Grow from "@mui/material/Grow";
import { Toolbar } from "@mui/material";

const styles = (theme) => ({
  paper: {
    padding: 24,
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
    marginBottom: 16,
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
  textField: {
    fontFamily: "inherit",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorSnackbarRoot: {
    backgroundColor: "#D53636",
  },
  successSnackbarRoot: {
    backgroundColor: "#1DB954",
  },
});

export class Login extends PureComponent {
  state = {
    showPassword: false,
    snackbarOpen: false,
    successSnackbarOpen: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.setState({ snackbarOpen: true });
    }

    if (prevProps.successfulLogin !== this.props.successfulLogin) {
      this.setState({ successSnackbarOpen: true });
    }
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleSnackbarClose = () => {
    const { error } = this.props;
    this.setState({ snackbarOpen: false });
  };

  handleSuccessSnackbarClose = () => {
    this.setState({ successSnackbarOpen: false });
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

    const { showPassword, snackbarOpen, successSnackbarOpen } = this.state;

    const {
      handleClickShowPassword,
      handleMouseDownPassword,
      handleSnackbarClose,
      handleSuccessSnackbarClose,
    } = this;

    return (
      <>
        <Toolbar />
        <Container
          style={{ height: "80vh", display: "grid", placeItems: "center" }}
        >
          <Paper className={classes.paper} square elevation={3}>
            <Snackbar
              ContentProps={{
                classes: {
                  root: classes.errorSnackbarRoot,
                },
              }}
              open={snackbarOpen}
              autoHideDuration={8000}
              onClose={handleSnackbarClose}
              message={error}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            />

            <Snackbar
              ContentProps={{
                classes: {
                  root: classes.successSnackbarRoot,
                },
              }}
              open={successSnackbarOpen}
              autoHideDuration={2500}
              onClose={handleSuccessSnackbarClose}
              message="Successfully logged in"
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            />

            {successfulLogin ? (
              <Grow in={true} {...{ timeout: 700 }}>
                <Avatar className={classes.successAvatar}>
                  <CheckIcon />
                </Avatar>
              </Grow>
            ) : (
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
            )}

            <h4
              style={{
                color: "#1a1c20",
                textTransform: "uppercase",
                fontFamily: "inherit",
                letterSpacing: "0.1em",
              }}
            >
              Log In To Omniscraper
            </h4>

            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                error={snackbarOpen}
                value={username}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                inputProps={{ style: { fontFamily: "inherit" } }}
                InputLabelProps={{ style: { fontFamily: "inherit" } }}
                style={{ marginBottom: 20 }}
              />

              <FormControl
                variant="outlined"
                style={{ width: "100%" }}
                error={snackbarOpen}
              >
                <InputLabel
                  htmlFor="filled-adornment-password"
                  style={{ fontFamily: "inherit" }}
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  // error={error}
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleChange}
                  label="Password"
                  name="password"
                  required
                  autoComplete="current-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ fontFamily: "inherit", fontWeight: 600 }}
                endIcon={
                  loginLoading ? (
                    <CircularProgress size={16} style={{ color: "white" }} />
                  ) : (
                    ""
                  )
                }
              >
                Log In
              </Button>
            </form>
          </Paper>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(Login);
