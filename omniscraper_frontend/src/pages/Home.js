import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const ListComponent = React.lazy(() => import("../components/ListComponent"));

const styles = (theme) => ({
  root: {
    color: "#185adb",
    flex: 1,
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    paddingTop: 72,
  },
});

export class Home extends Component {
  render() {
    const {
      classes,
      loggedIn,
      videoTags,
      error,
      loading,
      hasMore,
      videos,
      loadTags,
      loadVideos,
    } = this.props;

    return (
      <React.Fragment>
        <ListComponent
          loggedIn={loggedIn}
          videoTags={videoTags}
          hasMore={hasMore}
          loadVideos={loadVideos}
          error={error}
          videos={videos}
          loading={loading}
          loadTags={loadTags}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
