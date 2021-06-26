import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import ListComponent from "./ListComponent";

const styles = (theme) => ({
  root: {
    color: "#185adb",
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 100,
  },
  spinner: {
    margin: 20,
  },
});

export class Home extends Component {
  handleInfiniteScroll = () => {
    const { error, loading, hasMore, loadVideos } = this.props;
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (error || loading || !hasMore) return;

    if (scrollTop >= scrollHeight - clientHeight - 200) {
      loadVideos();
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleInfiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleInfiniteScroll);
  }

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
      clickedTag,
      handleClickedTag,
    } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root} onScroll={this.handleInfiniteScroll}>
          <ListComponent
            loggedIn={loggedIn}
            videoTags={videoTags}
            videos={videos}
            loading={loading}
            loadTags={loadTags}
            clickedTag={clickedTag}
            handleClickedTag={handleClickedTag}
          />

          {!hasMore && (
            <div style={{ textAlign: "center" }}>No more videos</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
