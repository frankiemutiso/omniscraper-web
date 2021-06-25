import React, { Suspense, Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import axios from "axios";
const Home = React.lazy(() => import("./Home"));
const Login = React.lazy(() => import("./Login"));
const FilteredVideos = React.lazy(() => import("./FilteredVideos"));
import Nav from "./Nav";
const Video = React.lazy(() => import("./Video"));
import { axiosInstance } from "../axiosInstance";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { ThreeDots } from "@bit/mhnpd.react-loader-spinner.three-dots";
import createHistory from "history/createBrowserHistory";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
  palette: {
    primary: {
      main: "#185adb",
    },
    secondary: {
      main: "#cf0000",
    },
  },
});

const history = createHistory();

history.listen((location) => {
  window.ga("send", "pageview"), location.pathname;
});

class App extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: localStorage.getItem("access_token") ? true : false,
    loginLoading: false,
    error: null,
    clickedTag: parseInt(localStorage.getItem("clicked_tag")) || null,
    tagsLoading: false,
    videoTags: [],
    videosLoadingError: false,
    loading: false,
    offset: 0,
    limit: 12,
    videos: [],
    hasMore: true,
  };

  componentDidMount() {
    window.ga("create", "UA-190601275-1", "auto");
    window.ga("send", "pageview");

    this.loadTags();
    this.loadVideos();
  }

  loadVideos = () => {
    this.setState({ loading: true }, () => {
      const { offset, limit } = this.state;
      const url = `${process.env.API_URL}/api/videos/?limit=${limit}&offset=${offset}`;

      axios
        .get(url)
        .then((res) => {
          const newVideos = res.data.videos;
          const hasMore = res.data.has_more;

          this.setState({
            hasMore,
            loading: false,
            videos: [...this.state.videos, ...newVideos],
            offset: offset + limit,
          });
        })
        .catch((err) => {
          this.setState({
            videosLoadingError: err.message,
            loading: false,
          });
        });
    });
  };

  loadTags = () => {
    this.setState({ tagsLoading: true }, () => {
      const url = `${process.env.API_URL}/api/tags/`;

      axios
        .get(url)
        .then((res) => {
          const newTags = res.data.tags;

          this.setState({
            videoTags: newTags,
            tagsLoading: false,
          });
        })
        .catch((err) => {
          this.setState({
            tagsLoading: false,
          });
        });
    });
  };

  handleClickedTag = (tag) => {
    this.setState({ clickedTag: tag }, () =>
      localStorage.setItem("clicked_tag", this.state.clickedTag)
    );
  };

  handleClearClickedTag = () => {
    localStorage.removeItem("clicked_tag");

    this.setState({ clickedTag: null });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    const { username, password } = this.state;
    e.preventDefault();

    this.setState({ loginLoading: true }, () => {
      axiosInstance
        .post("token/obtain/", {
          username,
          password,
        })
        .then((response) => {
          axiosInstance.defaults.headers["Authorization"] =
            "JWT " + response.data.access;

          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);

          this.setState({
            loggedIn: true,
            loginLoading: false,
            username: "",
            password: "",
          });
        })
        .catch((error) => {
          this.setState({ loggedIn: false, loginLoading: false });
        });
    });
  };

  handleLogout = () => {
    axiosInstance
      .post("/blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      })
      .then((response) => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        axiosInstance.defaults.headers["Authorization"] = null;

        this.setState({ loggedIn: false });
      })
      .catch((e) => {
        console.log(e.statusText);
        this.setState({ loggedIn: false });
      });
  };

  render() {
    const {
      handleChange,
      handleLogin,
      handleLogout,
      handleClickedTag,
      handleClearClickedTag,
      loadTags,
      loadVideos,
    } = this;
    const {
      username,
      password,
      error,
      loggedIn,
      loginLoading,
      videoTags,
      clickedTag,
      tagsLoading,

      videosLoadingError,
      loading,
      hasMore,
      videos,
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <div>
            <Suspense
              fallback={
                <div
                  style={{
                    height: "100vh",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <ThreeDots color="#185adb" height={50} width={50} />
                </div>
              }
            >
              <Nav
                loggedIn={loggedIn}
                handleLogout={handleLogout}
                handleClearClickedTag={handleClearClickedTag}
              />

              <Switch>
                {loggedIn ? <Redirect from="/login" to="/" /> : ""}
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Home
                      {...props}
                      loggedIn={loggedIn}
                      videoTags={videoTags}
                      handleClickedTag={handleClickedTag}
                      clickedTag={clickedTag}
                      tagsLoading={tagsLoading}
                      loadTags={loadTags}
                      error={videosLoadingError}
                      loading={loading}
                      hasMore={hasMore}
                      videos={videos}
                      loadVideos={loadVideos}
                    />
                  )}
                />

                <Route
                  path="/tags/:slug"
                  render={(props) => (
                    <FilteredVideos
                      {...props}
                      videoTags={videoTags}
                      loggedIn={loggedIn}
                      handleClickedTag={handleClickedTag}
                      clickedTag={clickedTag}
                      tagsLoading={tagsLoading}
                      loadTags={loadTags}
                    />
                  )}
                />
                <Route
                  path="/login"
                  render={(props) => (
                    <Login
                      {...props}
                      username={username}
                      password={password}
                      loginLoading={loginLoading}
                      error={error}
                      handleChange={handleChange}
                      handleSubmit={handleLogin}
                    />
                  )}
                />

                <Route path="/:slug" render={() => <Video />} />
              </Switch>
            </Suspense>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
