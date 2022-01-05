import React, { Suspense, Component } from "react";
import createTheme from "@mui/material/styles/createTheme";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import createHistory from "history/createBrowserHistory";
// import axios from "axios";
import { ThreeDots } from "@bit/mhnpd.react-loader-spinner.three-dots";
import { axiosInstance } from "./utils/axiosInstance";
const Nav = React.lazy(() => import("./components/Nav"));
const Video = React.lazy(() => import("./pages/Video"));
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const FilteredVideos = React.lazy(() => import("./pages/FilteredVideos"));

const theme = createTheme({
  typography: {
    fontFamily: ["Inter"].join(","),
  },
  palette: {
    primary: {
      main: "#185adb",
    },
    secondary: {
      main: "#FF2626",
    },
    delete: {
      main: "#cf0000",
    },
    white: { main: "#fff" },
  },
});

const history = createHistory();

history.listen((location) => {
  window.ga("set", "page", location.pathname + location.search);
  window.ga("send", "pageview");
});

class App extends Component {
  state = {
    username: "",
    password: "",
    loggedIn:
      typeof window !== "undefined"
        ? localStorage.getItem("access_token")
          ? true
          : false
        : null,
    loginLoading: false,
    error: null,
    tagsLoading: false,
    videoTags: [],
    videosLoadingError: false,
    loading: false,
    offset: 0,
    limit: 12,
    videos: [],
    hasMore: true,
    scrollPosition: 0,
    successfulLogin: false,
  };

  componentDidMount() {
    window.ga("create", "UA-190601275-1", "auto");
    window.ga("send", "pageview");

    this.loadTags();
    this.loadVideos();
  }

  // addVideosToCache = async (videos) => {
  //   const cache = await caches.open("videos-cache");
  //   const url = videos.map((video) => video.url);

  //   await cache.add(url);
  // };

  // componentDidUpdate(prevState) {
  //   if (prevState.videos !== this.state.videos) {
  //     this.addVideosToCache(this.state.videos);
  //     console.log(this.state.videos);
  //   }
  // }

  loadVideos = () => {
    this.setState({ loading: true }, () => {
      const { offset, limit } = this.state;

      const url = `/api/videos/?limit=${limit}&offset=${offset}`;
      // const worker = new Worker("/worker.js");
      const worker = new Worker(new URL("./worker.js", import.meta.url));

      worker.postMessage(url);

      worker.onmessage = (e) => {
        const newVideos = e.data.videos;
        const hasMore = e.data.has_more;

        this.setState({
          hasMore,
          loading: false,
          videos: [...this.state.videos, ...newVideos],
          offset: offset + limit,
        });
      };

      // axios
      //   .get(url)
      //   .then((res) => {
      //     const newVideos = res.data.videos;
      //     const hasMore = res.data.has_more;

      //     this.setState({
      //       hasMore,
      //       loading: false,
      //       videos: [...this.state.videos, ...newVideos],
      //       offset: offset + limit,
      //     });
      //   })
      //   .catch((err) => {
      //     this.setState({
      //       videosLoadingError: err.message,
      //       loading: false,
      //     });
      //   });
    });
  };

  loadTags = () => {
    this.setState({ tagsLoading: true }, () => {
      const url = "/api/tags/";
      // const worker = new Worker("/tagsWorker.js");
      const worker = new Worker(new URL("./tagsWorker.js", import.meta.url));

      worker.postMessage(url);

      worker.onmessage = (e) => {
        const newTags = e.data.tags;

        this.setState({
          videoTags: newTags,
          tagsLoading: false,
        });
      };

      // axios
      //   .get(url)
      //   .then((res) => {
      //     const newTags = res.data.tags;

      //     this.setState({
      //       videoTags: newTags,
      //       tagsLoading: false,
      //     });
      //   })
      //   .catch((err) => {
      //     this.setState({
      //       tagsLoading: false,
      //     });
      //   });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    const { handleRedirectionDelay } = this;
    const { username, password } = this.state;
    e.preventDefault();

    this.setState({ loginLoading: true }, () => {
      axiosInstance
        .post("token/obtain/", {
          username,
          password,
        })
        .then((response) => {
          if (response.status === 200) {
            axiosInstance.defaults.headers["Authorization"] =
              "JWT " + response.data.access;

            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);

            this.setState(
              {
                successfulLogin: true,
                loginLoading: false,
              },
              handleRedirectionDelay()
            );
          } else {
            this.setState({
              loggedIn: false,
              loginLoading: false,
              username: "",
              password: "",
              error: response.statusText,
            });
          }
        })
        .catch((error) => {
          const errorMessage = error.response.data.detail;
          this.setState({
            loggedIn: false,
            loginLoading: false,
            error: errorMessage,
          });
        });
    });
  };

  handleRedirectionDelay = () => {
    setTimeout(
      () =>
        this.setState({
          
          username: "",
          password: "",
          error: null,
          loggedIn: true,
        }),
      2500
    );
  };

  handleLogout = () => {
    axiosInstance
      .post("blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      })
      .then((response) => {
        if (response.status === 205) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          axiosInstance.defaults.headers["Authorization"] = null;
          this.setState({ loggedIn: false });
        }
      })
      .catch((e) => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        axiosInstance.defaults.headers["Authorization"] = null;
        this.setState({ loggedIn: false });
      });
  };

  handleScrollPosition = () => {
    this.setState({
      scrollPosition: window.pageYOffset,
    });
  };

  render() {
    const {
      handleChange,
      handleLogin,
      handleLogout,
      loadTags,
      loadVideos,
      handleScrollPosition,
    } = this;
    const {
      username,
      password,
      error,
      loggedIn,
      loginLoading,
      videoTags,
      tagsLoading,
      successfulLogin,
      videosLoadingError,
      loading,
      hasMore,
      videos,
      scrollPosition,
    } = this.state;

    return (
      <StyledEngineProvider injectFirst>
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
                <Nav loggedIn={loggedIn} handleLogout={handleLogout} />

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
                        tagsLoading={tagsLoading}
                        loadTags={loadTags}
                        error={videosLoadingError}
                        loading={loading}
                        hasMore={hasMore}
                        videos={videos}
                        loadVideos={loadVideos}
                        scrollPosition={scrollPosition}
                        handleScrollPosition={handleScrollPosition}
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
                        tagsLoading={tagsLoading}
                        loadTags={loadTags}
                        scrollPosition={scrollPosition}
                        handleScrollPosition={handleScrollPosition}
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
                        successfulLogin={successfulLogin}
                      />
                    )}
                  />

                  <Route path="/:slug" render={() => <Video />} />
                </Switch>
              </Suspense>
            </div>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}

export default App;
