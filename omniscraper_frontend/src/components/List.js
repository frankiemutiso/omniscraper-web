import React, { Component } from "react";
import withStyles from "@mui/styles/withStyles";
import Button from "./reusableComponents/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
// import Menu from "./reusableComponents/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import Hidden from "@mui/material/Hidden";
import ShareIcon from "@mui/icons-material/Share";
import MoreIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import Toolbar from "@mui/material/Toolbar";
import { withRouter } from "react-router";
import Blank from "./Blank";
import { axiosInstance } from "../utils/axiosInstance";
import Instructions from "./Instructions";
import { calculateTimeSinceSave } from "../utils/calculateTimeLapse";
import "./List.css";
import MediaCard from "./reusableComponents/MediaCard";
import Placeholder from "./reusableComponents/Placeholder";
import Modal from "./reusableComponents/Modal";
import { connect } from "react-redux";

// FIXME checkout https://mui.com/components/use-media-query/#using-material-uis-breakpoint-helpers
const withMobileDialog = () => (WrappedComponent) => (props) =>
  <WrappedComponent {...props} width='lg' fullScreen={false} />;

const Tags = React.lazy(() => import("./Tags"));

const styles = (theme) => ({
  root: {
    color: "#185adb",
    flex: 1,
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    paddingBottom: 16,
  },
  title: {
    "&h2": {
      fontFamily: "inherit",
      fontWeight: 700,
    },
  },
  menuItemText: {
    fontFamily: "inherit",
  },
  fab: {
    margin: 0,
    left: "auto",
    top: "auto",
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    textTransform: "none",
  },
  videos: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 16,
    },
  },
});

export class List extends Component {
  state = {
    loadingTags: false,
    open: false,
    clickedVideo: {},
    flagging: false,
    mouseX: null,
    mouseY: null,
    tagsDialogOpen: false,
    createTagOpen: false,
    tagName: "",
    description: "",
    selectedTagsIds: [],
    editingVideoTags: false,
    editingTag: false,
    checkedTags: [],
    scrollPosition: 0,
    snackBarOpen: false,
    shareSupportedError: false,
    shareError: null,
    tagMenuMouseX: null,
    tagMenuMouseY: null,
    tagSlug: "",
    tag: {},
    editingDialogOpen: false,
  };

  componentWillMount = () => {
    this.setState({ scrollPosition: this.props.scrollPosition });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleInfiniteScroll);
    window.scrollTo(0, this.state.scrollPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleInfiniteScroll);
  }

  handleInfiniteScroll = () => {
    const { error, loading, hasMore, loadVideos } = this.props;
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (error || loading || !hasMore) return;

    const checkHeight = scrollTop >= scrollHeight - clientHeight - 200;

    if (checkHeight) {
      loadVideos();
    }
  };

  flagVideo = (video) => {
    const url = `${video.slug}`;
    const flagged = true;

    this.setState({ flagging: true }, () => {
      axiosInstance
        .patch(url, {
          id: video.id,
          url: video.url,
          parent_tweet_id: video.parent_tweet_id,
          slug: video.slug,
          flagged: flagged,
        })
        .then((response) => {
          if (response.status === 200) {
            const newVideos = this.state.videos.filter(
              (v) => v.id !== video.id
            );
            this.setState({ flagging: false, videos: newVideos });
            this.handlePromptClose();
          }
        })
        .catch((err) => {
          this.setState({ flagging: false });
          this.handlePromptClose();
        });
    });
  };

  handleCreateTag = () => {
    const url = "tags/";

    const { tagName, description } = this.state;

    this.setState({ creatingTag: true }, () => {
      axiosInstance
        .post(url, {
          tag_name: tagName,
          description,
        })
        .then((response) => {
          if (response.status === 201) {
            this.setState({ creatingTag: false });
            this.handleCreateDialogClose();
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({ creatingTag: false });
        });
    });
  };

  handleMenuClick = (e, video) => {
    const { videoTags } = this.props;
    this.handleCheckedTags(videoTags, video);

    this.setState({
      mouseX: e.clientX - 2,
      mouseY: e.clientY - 4,
      clickedVideo: video,
    });
  };

  handleMenuClose = () => {
    this.setState({ mouseX: null, mouseY: null, clickedVideo: {} });
  };

  handlePromptOpen = () => {
    this.setState({ open: true });
  };

  handlePromptClose = () => {
    this.setState({ open: false });
    this.handleMenuClose();
  };

  handleTagsDialogOpen = () => {
    this.setState({ tagsDialogOpen: true });
  };

  handleTagsDialogClose = () => {
    this.setState({ tagsDialogOpen: false });
    this.handleMenuClose();
  };

  handleCreateDialogOpen = () => {
    this.setState({ createTagOpen: true });
  };

  handleCreateDialogClose = () => {
    this.setState({ createTagOpen: false, tagName: "", description: "" });
  };

  handleEditTagDialogOpen = () => {
    const tag = this.props.videoTags.find((x) => x.slug === this.state.tagSlug);
    this.setState({
      createTagOpen: true,
      editingDialogOpen: true,
      tagName: tag.tag_name,
      description: tag.description,
      tag: tag,
    });
  };

  handleEditTagDialogClose = () => {
    this.setState({
      createTagOpen: false,
      tagName: "",
      description: "",
      editingDialogOpen: false,
      tag: {},
    });

    this.handleTagMenuClose();
  };

  handleTagChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelectedTagsChange = (e, values) => {
    this.setState({
      selectedTagsIds: values.map((value) => value.id),
    });
  };

  handleEditTag = () => {
    const { tag, tagName, description } = this.state;
    const splitSlug = tagName.toLowerCase().split(" ");
    const joinedSlug = splitSlug.join("-");

    console.log(joinedSlug);
    const url = `/tags/${tag.slug}`;

    this.setState({ editingTag: true }, () => {
      axiosInstance
        .patch(url, {
          id: tag.id,
          tag_name: tagName,
          description: description,
          slug: joinedSlug,
        })
        .then((res) => {
          console.log(res.status);
          this.setState({ editingTag: false });
          this.handleEditTagDialogClose();
        })
        .catch((err) => {
          console.log(err.message);
          this.setState({ editingTag: false });
          this.handleEditTagDialogClose();
        });
    });
  };

  handleRightClick = (e, tag) => {
    e.preventDefault();
    this.setState({
      tagMenuMouseX: e.clientX - 2,
      tagMenuMouseY: e.clientY - 4,
      tagSlug: tag.slug,
    });
  };

  handleTagMenuClose = () => {
    this.setState({ tagSlug: "", tagMenuMouseX: null, tagMenuMouseY: null });
  };

  handleEditVideoTags = () => {
    const { selectedTagsIds, clickedVideo } = this.state;

    const url = `/${clickedVideo.slug}`;

    this.setState({ editingVideoTags: true }, () => {
      axiosInstance
        .patch(url, {
          tags: selectedTagsIds,
        })
        .then((res) => {
          console.log(res.status);
          this.setState({ editingVideoTags: false });
          this.handleTagsDialogClose();
        })
        .catch((err) => {
          console.log(err.message);
          this.setState({ editingVideoTags: false });
          this.handleTagsDialogClose();
        });
    });
  };

  handleCheckedTags = (tags, clickedVideo) => {
    const checked = tags.filter((t) => clickedVideo.tags.includes(t.id));
    this.setState({ checkedTags: checked });
  };

  handleShare = (video) => {
    if (navigator.share) {
      navigator
        .share({
          url: `/${video.slug}`,
        })
        .then(() => {
          // this.setState({ snackBarOpen: true, shareSuccessful: true });
          console.log("Thanks for sharing");
        })
        .catch((err) => {
          // this.setState({ snackBarOpen: true, shareError: err.message });
          console.log(err.message);
        });
    } else {
      this.setState({ snackBarOpen: true, shareSupportedError: true });
    }
  };

  handleSnackBarClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      snackBarOpen: false,
      shareSupportedError: false,
      shareError: null,
    });
  };

  handleVideoClick = (slug) => {
    const { history } = this.props;

    history.push(`/${slug}`);
  };

  render() {
    const {
      open,
      clickedVideo,
      flagging,
      mouseX,
      mouseY,
      tagsDialogOpen,
      createTagOpen,
      tagName,
      description,
      creatingTag,
      editingVideoTags,
      checkedTags,
      snackBarOpen,
      shareSupportedError,
      shareError,
      tagMenuMouseX,
      tagMenuMouseY,
      tagSlug,
      editingTag,
      editingDialogOpen,
    } = this.state;

    const {
      classes,
      loading,
      videos,
      loggedIn,
      videoTags,
      hasMore,
      fullScreen,
      handleScrollPosition,
      window,
      history,
    } = this.props;

    const {
      flagVideo,
      handlePromptOpen,
      handlePromptClose,
      handleMenuClick,
      handleMenuClose,
      handleTagsDialogOpen,
      handleTagsDialogClose,
      handleCreateDialogOpen,
      handleCreateDialogClose,
      handleTagChange,
      handleCreateTag,
      handleSelectedTagsChange,
      handleEditVideoTags,
      handleEditTagDialogOpen,
      handleEditTagDialogClose,
      handleShare,
      handleSnackBarClose,
      handleEditTag,
      handleRightClick,
      handleTagMenuClose,
      handleVideoClick,
    } = this;

    const reportDialog = (
      <>
        <Modal
          type='report'
          open={open}
          handleClose={handlePromptClose}
          title='Report?'
          handleRightButtonClick={() => flagVideo(clickedVideo)}
          isSpinning={flagging}
        />
      </>
    );

    const editVideoTagsDialog = (
      <>
        <Modal
          type='editVideo'
          open={tagsDialogOpen}
          checkedTags={checkedTags}
          handleClose={handleTagsDialogClose}
          title='Edit video tags'
          isSpinning={editingVideoTags}
          fullScreen={fullScreen}
          handleChange={handleSelectedTagsChange}
          videoTags={videoTags}
          handleRightButtonClick={handleEditVideoTags}
          fullWidth={true}
        />
      </>
    );

    const createTagDialog = (
      <>
        <Modal
          type='createTag'
          open={createTagOpen || editingDialogOpen}
          handleClose={
            editingDialogOpen
              ? handleEditTagDialogClose
              : handleCreateDialogClose
          }
          title={editingDialogOpen ? "Edit tag" : "Create tag"}
          handleRightButtonClick={
            editingDialogOpen ? handleEditTag : handleCreateTag
          }
          isSpinning={creatingTag || editingTag}
          fullScreen={fullScreen}
          handleChange={handleTagChange}
          fullWidth={true}
          description={description}
          tagName={tagName}
        />
      </>
    );

    return (
      <div className={classes.root} onScroll={this.handleInfiniteScroll}>
        <Toolbar />
        <Blank />

        {editVideoTagsDialog}
        {createTagDialog}
        {reportDialog}
        <Menu
          keepMounted
          open={mouseY !== null}
          onClose={handleMenuClose}
          anchorReference='anchorPosition'
          anchorPosition={
            mouseY !== null && mouseX !== null
              ? { top: mouseY, left: mouseX }
              : undefined
          }
        >
          <MenuItem className={classes.menuItemText} onClick={handlePromptOpen}>
            Report
          </MenuItem>
          <MenuItem
            className={classes.menuItemText}
            onClick={handleTagsDialogOpen}
          >
            Add/Remove tags
          </MenuItem>
        </Menu>

        {/* <Menu
          top={mouseY}
          left={mouseX}
          open={mouseY && mouseX }
          menuItems={[
            { label: "Report", clickHandler: handlePromptOpen },
            { label: "Add/Remove tags", clickHandler: handleTagsDialogOpen },
          ]}
        /> */}

        <Tags
          clickedTag={this.props.clickedTag}
          handleEditTagDialogOpen={handleEditTagDialogOpen}
          handleEditTagDialogClose={handleEditTagDialogClose}
          handleEditTag={handleEditTag}
          mouseX={tagMenuMouseX}
          mouseY={tagMenuMouseY}
          tagSlug={tagSlug}
          handleRightClick={handleRightClick}
          handleClose={handleTagMenuClose}
          loading={loading}
          handleScrollPosition={handleScrollPosition}
          videoTags={videoTags}
        />
        <Grid container spacing={2} style={{ paddingTop: 16 }}>
          <Hidden mdDown>
            <Grid item md={3} xs={12} sm={12}>
              <Instructions />
            </Grid>
          </Hidden>
          <Grid item md={9} xs={12} sm={12} className={classes.videos}>
            <Grid container spacing={2}>
              {videos.map((video, index) => {
                const url =
                  video.video_thumbnail_link_https !== null
                    ? video.video_thumbnail_link_https
                    : video.url;

                const indexOfHttps =
                  video.text !== null && video.text.indexOf("https");
                const text =
                  video.text !== null &&
                  video.text.slice(0, indexOfHttps).trim();

                const lapse = calculateTimeSinceSave(video);

                return (
                  <Grid item md={4} sm={6} xs={12} key={index}>
                    <MediaCard
                      displayBottomActions
                      view='list'
                      type={
                        video.video_thumbnail_link_https ? "image" : "video"
                      }
                      height='180px'
                      style={{
                        maxWidth: 380,
                      }}
                      playIconSize={60}
                      src={url}
                      handleClick={() => {
                        handleVideoClick(video.slug);
                        handleScrollPosition();
                      }}
                      leftButton={
                        <Button
                          style={{ marginRight: 8 }}
                          type='icon'
                          onClick={() => handleShare(video)}
                        >
                          <ShareIcon color='primary' style={{ fontSize: 18 }} />
                        </Button>
                      }
                      rightButton={
                        loggedIn && (
                          <Button
                            type='icon'
                            onClick={(e) => handleMenuClick(e, video)}
                            style={{ marginRight: 8 }}
                          >
                            <MoreIcon
                              color='primary'
                              style={{ fontSize: 18 }}
                            />
                          </Button>
                        )
                      }
                      text={text}
                      lapse={lapse}
                    />
                  </Grid>
                );
              })}
            </Grid>

            {loading && (
              <Grid container style={{ marginTop: 2 }} spacing={2}>
                {Array.from(new Array(12)).map((item, index) => (
                  <Grid item md={4} sm={6} xs={12} key={index}>
                    <Placeholder
                      style={{ maxWidth: 380 }}
                      height={180}
                      view='list'
                      loggedIn={loggedIn}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>

        {loggedIn && (
          <React.Fragment>
            <Hidden lgDown>
              <Fab
                className={classes.fab}
                color='primary'
                variant='extended'
                size='medium'
                onClick={handleCreateDialogOpen}
              >
                <AddIcon style={{ marginRight: 8 }} />
                Create tag
              </Fab>
            </Hidden>
            <Hidden mdUp>
              <Fab
                className={classes.fab}
                color='primary'
                onClick={handleCreateDialogOpen}
              >
                <AddIcon />
              </Fab>
            </Hidden>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state.users, ...state.tags };
};

const mapDispatchToProps = {loadTags}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(withStyles(styles)(withMobileDialog()(List)))
);
