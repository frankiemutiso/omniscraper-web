import React, { Component } from "react";
import withStyles from "@mui/styles/withStyles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DialogContent from "@mui/material/DialogContent";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Hidden from "@mui/material/Hidden";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CircularProgress from "@mui/material/CircularProgress";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Autocomplete from "@mui/material/Autocomplete";
import Skeleton from "@mui/material/Skeleton";
import ViewIcon from "@mui/icons-material/PlayArrow";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import { withRouter } from "react-router";
import Blank from "./Blank";
import { axiosInstance } from "../utils/axiosInstance";
import Instructions from "./Instructions";
import { calculateTimeSinceSave } from "../utils/calculateTimeLapse";

// FIXME checkout https://mui.com/components/use-media-query/#using-material-uis-breakpoint-helpers
const withMobileDialog = () => (WrappedComponent) => (props) =>
  <WrappedComponent {...props} width="lg" fullScreen={false} />;

const Tags = React.lazy(() => import("./Tags"));

const styles = (theme) => ({
  root: {
    color: "#185adb",
    flex: 1,
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    paddingBottom: 16,
  },
  buttons: {
    border: "1px solid #185adb",
    color: "#185adb",
    fontFamily: "Montserrat",
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
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  videos: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 16,
    },
  },
  textContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 4,
    [theme.breakpoints.up("md")]: {
      height: 50,
      textOverflow: "ellipsis",
      wordWrap: "break-word",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
  },
});

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" color="primary" />;

export class ListComponent extends Component {
  state = {
    loadingTags: false,
    open: false,
    clickedVideo: {},
    flagging: false,
    mouseX: null,
    mouseY: null,
    tagsDialogOpen: false,
    tagDialogOpen: false,
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
        .put(url, {
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
            // loadTags();
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
    this.setState({ tagDialogOpen: true });
  };

  handleCreateDialogClose = () => {
    this.setState({ tagDialogOpen: false, tagName: "", description: "" });
  };

  handleEditTagDialogOpen = () => {
    const tag = this.props.videoTags.find((x) => x.slug === this.state.tagSlug);
    this.setState({
      tagDialogOpen: true,
      editingDialogOpen: true,
      tagName: tag.tag_name,
      description: tag.description,
      tag: tag,
    });
  };

  handleEditTagDialogClose = () => {
    this.setState({
      tagDialogOpen: false,
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
      tagDialogOpen,
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
      <Dialog
        open={open}
        onClose={handlePromptClose}
        style={{ paddingBottom: 8 }}
      >
        <DialogTitle className={classes.title}>
          Are you sure you want to report this video?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handlePromptClose}>Cancel</Button>
          <Button
            onClick={() => flagVideo(clickedVideo)}
            variant="contained"
            autoFocus
            color="secondary"
            endIcon={
              flagging ? (
                <CircularProgress size={16} style={{ color: "white" }} />
              ) : (
                ""
              )
            }
          >
            Report
          </Button>
        </DialogActions>
      </Dialog>
    );

    const editVideoTagsDialog = (
      <Dialog
        open={tagsDialogOpen}
        onClose={handleTagsDialogClose}
        fullWidth={true}
        fullScreen={fullScreen}
      >
        <DialogTitle className={classes.title}>
          Edit video tags
          <IconButton
            className={classes.closeButton}
            onClick={handleTagsDialogClose}
            size="large"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Autocomplete
            fullWidth={true}
            open={tagsDialogOpen}
            multiple
            onChange={handleSelectedTagsChange}
            options={videoTags}
            disableCloseOnSelect
            filterSelectedOptions={true}
            getOptionLabel={(option) => option.tag_name}
            defaultValue={checkedTags}
            renderOption={(props, option, { selected }) => (
              <li key={option.id} {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                  color="primary"
                />
                {option.tag_name}
              </li>
            )}
            style={{ width: "100%", height: "52vh" }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Tags"
                style={{ marginTop: 8 }}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTagsDialogClose}>Cancel</Button>
          <Button
            color="primary"
            variant="contained"
            autoFocus
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={handleEditVideoTags}
            endIcon={
              editingVideoTags ? (
                <CircularProgress size={16} style={{ color: "white" }} />
              ) : (
                ""
              )
            }
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );

    const createTagDialog = (
      <Dialog
        fullWidth={true}
        open={tagDialogOpen}
        onClose={
          editingDialogOpen ? handleEditTagDialogClose : handleCreateDialogClose
        }
        fullScreen={fullScreen}
      >
        <DialogTitle className={classes.title}>
          <Typography variant="body1">
            {editingDialogOpen ? "Edit tag" : "Create tag"}
          </Typography>
          <IconButton
            className={classes.closeButton}
            onClick={
              editingDialogOpen
                ? handleEditTagDialogClose
                : handleCreateDialogClose
            }
            size="large"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            variant="outlined"
            margin="normal"
            fullWidth
            label="Tag name"
            name="tagName"
            onChange={handleTagChange}
            value={tagName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Description (optional)"
            multiline={true}
            minRows={2}
            name="description"
            onChange={handleTagChange}
            value={description}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={
              editingDialogOpen
                ? handleEditTagDialogClose
                : handleCreateDialogClose
            }
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            autoFocus
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={editingDialogOpen ? handleEditTag : handleCreateTag}
            endIcon={
              creatingTag || editingTag ? (
                <CircularProgress size={16} style={{ color: "white" }} />
              ) : (
                ""
              )
            }
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
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
          anchorReference="anchorPosition"
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
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={snackBarOpen}
          autoHideDuration={3000}
          onClose={handleSnackBarClose}
          message={
            shareSupportedError
              ? "Web share not supported!"
              : shareError !== null
              ? `${shareError}`
              : ""
          }
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackBarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        ></Snackbar>

        <Tags
          videoTags={videoTags}
          clickedTag={this.props.clickedTag}
          handleEditTagDialogOpen={handleEditTagDialogOpen}
          handleEditTagDialogClose={handleEditTagDialogClose}
          handleEditTag={handleEditTag}
          mouseX={tagMenuMouseX}
          mouseY={tagMenuMouseY}
          tagSlug={tagSlug}
          handleRightClick={handleRightClick}
          handleClose={handleTagMenuClose}
          loggedIn={loggedIn}
          loading={loading}
          handleScrollPosition={handleScrollPosition}
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
                    <Card
                      elevation={0}
                      style={{
                        maxWidth: 380,
                      }}
                    >
                      <CardActionArea
                        onClick={() => {
                          handleVideoClick(video.slug);
                          handleScrollPosition();
                        }}
                      >
                        <CardMedia
                          component={
                            video.video_thumbnail_link_https ? "img" : "video"
                          }
                          height="180"
                          disablePictureInPicture
                          controlsList="nodownload"
                          crossOrigin="anonymous"
                          image={url}
                          style={{ objectFit: "cover", position: "relative" }}
                          onContextMenu={(e) => e.preventDefault()}
                        />

                        <ViewIcon
                          style={{
                            color: "white",
                            fontSize: 60,
                            opacity: 0.8,
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                          onClick={() => {
                            handleVideoClick(video.slug);
                            handleScrollPosition();
                          }}
                          size="large"
                        />
                      </CardActionArea>

                      <CardActions>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          <div className={classes.textContainer}>
                            {text.length > 0 && (
                              <Typography
                                variant="caption"
                                color="textPrimary"
                                style={{
                                  "&::first-letter": {
                                    textTransform: "uppercase",
                                  },
                                }}
                              >
                                {text}
                              </Typography>
                            )}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              color="textSecondary"
                              variant="caption"
                              style={{
                                // marginRight: "auto",
                                marginLeft: 8,
                              }}
                            >
                              {lapse}
                            </Typography>
                            <div>
                              <IconButton
                                size="small"
                                color="primary"
                                onClick={() => handleShare(video)}
                                style={{ marginRight: 8 }}
                              >
                                <ShareIcon style={{ fontSize: 16 }} />
                              </IconButton>
                              {loggedIn && (
                                <IconButton
                                  size="small"
                                  color="primary"
                                  onClick={(e) => handleMenuClick(e, video)}
                                  style={{ marginRight: 8 }}
                                >
                                  <MoreIcon style={{ fontSize: 16 }} />
                                </IconButton>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>

            {loading && (
              <Grid container spacing={2} style={{ marginTop: 2 }}>
                {Array.from(new Array(12)).map((item, index) => (
                  <Grid item md={4} sm={6} xs={12} key={index}>
                    <Card elevation={0} style={{ maxWidth: 380 }}>
                      <CardActionArea>
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          style={{ height: 180 }}
                        />
                      </CardActionArea>

                      <CardActions>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          <div>
                            <Skeleton animation="wave" variant="text" />
                            <Skeleton animation="wave" variant="text" />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Skeleton
                              animation="wave"
                              height={30}
                              width={80}
                              style={{ marginRight: "auto" }}
                            />
                            <IconButton
                              size="small"
                              color="primary"
                              style={{ marginRight: 8 }}
                            >
                              <ShareIcon size="small" />
                            </IconButton>
                            {loggedIn && (
                              <IconButton
                                size="small"
                                color="primary"
                                style={{ marginRight: 8 }}
                              >
                                <MoreIcon />
                              </IconButton>
                            )}
                          </div>
                        </div>
                      </CardActions>
                    </Card>
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
                color="primary"
                variant="extended"
                size="medium"
                onClick={handleCreateDialogOpen}
              >
                <AddIcon style={{ marginRight: 8 }} />
                Create tag
              </Fab>
            </Hidden>
            <Hidden mdUp>
              <Fab
                className={classes.fab}
                color="primary"
                onClick={handleCreateDialogOpen}
              >
                <AddIcon />
              </Fab>
            </Hidden>
            {/* {!hasMore && (
              <div
                style={{
                  textAlign: "center",
                  marginTop: 32,
                  marginBottom: 80,
                }}
              >
                <Typography
                  variant="body1"
                  color="textSecondary"
                  style={{ color: "#000" }}
                >
                  "There is no real ending. It's just the place where you stop
                  the story."
                </Typography>
              </div>
            )} */}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(
  withStyles(styles)(withMobileDialog()(ListComponent))
);
