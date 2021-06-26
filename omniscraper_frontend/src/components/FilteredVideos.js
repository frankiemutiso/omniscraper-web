import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import axios from "axios";
import { withRouter } from "react-router";
import ListComponent from "./ListComponent";

const styles = (theme) => ({
  root: {
    color: "#185adb",
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 100,
  },
});

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
    const url = `${process.env.API_URL}/api/tags/${slug}`;

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
    const { classes, loggedIn, videoTags } = this.props;

    return (
      <div className={classes.root}>
        <ListComponent
          loggedIn={loggedIn}
          videos={videos}
          videoTags={videoTags}
          loading={loading}
        />

        {/* {!hasMore && <div>No more videos</div>} */}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(FilteredVideos));
