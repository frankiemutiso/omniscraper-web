import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import { withRouter } from "react-router";
const ListComponent = React.lazy(() => import("../components/ListComponent"));

const styles = (theme) => ({
  root: {
    color: "#185adb",
    flex: 1,
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    paddingTop: 100,
  },
});

// const API_URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_PROD_API_URL
//     : process.env.REACT_APP_DEV_API_URL;

export class FilteredVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      videos: [],
      loadingTags: false,
      slug: this.props.match.params.slug,
    };
  }

  componentDidMount = () => {
    this.loadVideos();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({ slug: this.props.match.params.slug, videos: [] }, () =>
        this.loadVideos()
      );
    }
  }

  loadVideos = () => {
    const slug = this.props.match.params.slug;
    const url = `/api/tags/${slug}`;

    this.setState({ loading: true }, () => {
      axios
        .get(url)
        .then((res) => {
          const newVideos = res.data.videos;

          this.setState({
            loading: false,
            videos: [...this.state.videos, ...newVideos],
          });
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            loading: false,
          });
        });
    });
  };

  render() {
    const { loading, videos } = this.state;
    const { classes, loggedIn, videoTags, loadTags, location } = this.props;

    const pathParams = location.pathname.split("/");
    const clickedTag = pathParams[pathParams.length - 1];

    return (
      <div className={classes.root}>
        <ListComponent
          loggedIn={loggedIn}
          videos={videos}
          videoTags={videoTags}
          loading={loading}
          loadTags={loadTags}
          clickedTag={clickedTag}
        />

        {/* {!hasMore && <div>No more videos</div>} */}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(FilteredVideos));
