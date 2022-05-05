import React, { Suspense, Component } from "react";
import createTheme from "@mui/material/styles/createTheme";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import createHistory from "history/createBrowserHistory";
import axios from "axios";
import { connect } from "react-redux";
import { ThreeDots } from "@bit/mhnpd.react-loader-spinner.three-dots";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import { loginUser } from "./store/actions/usersActions";
import { loadTags } from "./store/actions/tagsActions";

const Video = React.lazy(() => import("./pages/Video"));
const Home = React.lazy(() => import("./pages/Home"));
const FilteredVideos = React.lazy(() => import("./pages/FilteredVideos"));

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Sora"].join(","),
  },
  palette: {
    primary: {
      main: "#0071E3",
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
    error: null,
    videosLoadingError: false,
    loading: false,
    offset: 0,
    limit: 12,
    videos: [],
    hasMore: true,
    scrollPosition: 0,
    autoplayVideo: false,
    successfulLogin: false,
    trendingVideos: [],
    trendingVideosLoading: false,
  };

  componentDidMount = async () => {
    window.ga("create", "UA-190601275-1", "auto");
    window.ga("send", "pageview");

    const { loadTags } = this.props;

    await loadTags();
    await this.loadVideos();
    await this.loadTrendingVideos();
  };

  loadVideos = () => {
    this.setState({ loading: true }, () => {
      const { offset, limit } = this.state;

      const url = `/api/videos/?limit=${limit}&offset=${offset}`;

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

  loadTrendingVideos = () => {
    const url = "/api/trending/";
    this.setState({ trendingVideosLoading: true }, () => {
      axios
        .get(url)
        .then((res) => {
          const trendingVideos = res.data.trending_videos;

          this.setState({
            trendingVideos: trendingVideos,
            trendingVideosLoading: false,
          });
        })
        .catch((err) => {});
    });
  };

  handleScrollPosition = () => {
    this.setState({
      autoplayVideo: true,
      scrollPosition: window.pageYOffset,
    });
  };

  render() {
    const { loadVideos, handleScrollPosition } = this;
    const {
      videosLoadingError,
      loading,
      hasMore,
      videos,
      scrollPosition,
      autoplayVideo,
      trendingVideos,
      trendingVideosLoading,
    } = this.state;

    const { loggedIn, loginLoading, loginError } = this.props;

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
                    <ThreeDots color='#185adb' height={50} width={50} />
                  </div>
                }
              >
                <Nav />

                <Switch>
                  {loggedIn ? <Redirect from='/login' to='/' /> : ""}
                  <Route
                    exact
                    path='/'
                    render={(props) => (
                      <Home
                        {...props}
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
                    path='/tags/:slug'
                    render={(props) => (
                      <FilteredVideos
                        {...props}
                        scrollPosition={scrollPosition}
                        handleScrollPosition={handleScrollPosition}
                      />
                    )}
                  />

                  <Route
                    path='/login'
                    render={(props) => <Login {...props} />}
                  />

                  <Route
                    path='/:slug'
                    render={() => (
                      <Video
                        trendingVideosLoading={trendingVideosLoading}
                        autoplayVideo={autoplayVideo}
                        trendingVideos={trendingVideos}
                      />
                    )}
                  />
                </Switch>
              </Suspense>
            </div>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state.users };
};
const mapDispatchToProps = { loginUser, loadTags };

export default connect(mapStateToProps, mapDispatchToProps)(App);
