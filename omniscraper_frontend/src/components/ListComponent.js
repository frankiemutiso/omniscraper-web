import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DialogContent from "@material-ui/core/DialogContent";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Hidden from "@material-ui/core/Hidden";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Skeleton from "@material-ui/lab/Skeleton";
import ViewIcon from "@material-ui/icons/PlayArrow";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

const Tags = React.lazy(() => import("./Tags"));

const styles = (theme) => ({
  root: {
    color: "#185adb",
    flex: 1,
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    paddingTop: 72,
  },
  buttons: {
    border: "1px solid #185adb",
    color: "#185adb",
    fontFamily: "Montserrat",
  },
  title: {
    "&h2": {
      fontFamily: "inherit",
      fontWeight: 600,
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
    createTagDialogOpen: false,
    tagName: "",
    description: "",
    selectedTagsIds: [],
    editingVideoTags: false,
    checkedTags: [],
    scrollPosition: 0,
    snackBarOpen: false,
    shareSupportedError: false,
    shareError: null,
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

    if (scrollTop >= scrollHeight - clientHeight - 200) {
      loadVideos();
    }
  };

  handleScrollPosition = () => {
    this.setState({
      scrollPosition: window.pageYOffset,
    });
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
    const url = "/api/tags/";

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
    this.setState({ createTagDialogOpen: true });
  };

  handleCreateDialogClose = () => {
    this.setState({ createTagDialogOpen: false, tagName: "", description: "" });
  };

  handleTagChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelectedTagsChange = (e, values) => {
    this.setState({
      selectedTagsIds: values.map((value) => value.id),
    });
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

  render() {
    const {
      open,
      clickedVideo,
      flagging,
      mouseX,
      mouseY,
      tagsDialogOpen,
      createTagDialogOpen,
      tagName,
      description,
      creatingTag,
      editingVideoTags,
      checkedTags,
      snackBarOpen,
      shareSupportedError,
      shareError,
    } = this.state;

    const { classes, loading, videos, loggedIn, videoTags, hasMore } =
      this.props;

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
      handleScrollPosition,
      handleShare,
      handleSnackBarClose,
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
          <Button
            onClick={handlePromptClose}
            color="primary"
            style={{ fontFamily: "inherit" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => flagVideo(clickedVideo)}
            variant="contained"
            autoFocus
            style={{
              fontFamily: "inherit",
              backgroundColor: "#FF4848",
              color: "#fff",
            }}
            endIcon={
              flagging ? <CircularProgress size={16} color="white" /> : ""
            }
          >
            Report
          </Button>
        </DialogActions>
      </Dialog>
    );

    const tagsDialog = (
      <Dialog
        open={tagsDialogOpen}
        onClose={handleTagsDialogClose}
        fullWidth={true}
      >
        <DialogTitle className={classes.title}>
          Edit video tags
          <IconButton
            className={classes.closeButton}
            onClick={handleTagsDialogClose}
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
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                  color="primary"
                />
                {option.tag_name}
              </React.Fragment>
            )}
            style={{ width: "100%", height: "52vh" }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Tags" />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{ fontFamily: "inherit", fontWeight: 600, color: "#fff" }}
            onClick={handleTagsDialogClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            autoFocus
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={handleEditVideoTags}
            endIcon={
              editingVideoTags ? (
                <CircularProgress size={16} color="white" />
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
        open={createTagDialogOpen}
        onClose={handleCreateDialogClose}
      >
        <DialogTitle
          className={classes.title}
          style={{ flex: 1, display: "flex", justifyContent: "space-between" }}
        >
          Create a tag
          <IconButton
            className={classes.closeButton}
            onClick={handleCreateDialogClose}
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
            name="description"
            onChange={handleTagChange}
            value={description}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={handleCreateDialogClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            autoFocus
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={handleCreateTag}
            endIcon={
              creatingTag ? <CircularProgress size={16} color="white" /> : ""
            }
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );

    return (
      <div className={classes.root} onScroll={this.handleInfiniteScroll}>
        {tagsDialog}
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
            Edit video tags
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

        <Tags videoTags={videoTags} clickedTag={this.props.clickedTag} />

        <Grid
          container
          spacing={4}
          style={{
            marginTop: 1,
          }}
        >
          {videos.map((video, index) => (
            <Grid item lg={3} md={6} sm={6} xs={12} key={index}>
              <Card
                style={{
                  maxWidth: 380,
                }}
              >
                <CardActionArea
                  component={Link}
                  to={`/${video.slug}`}
                  onClick={handleScrollPosition}
                >
                  <CardMedia
                    component="video"
                    height="180"
                    disablePictureInPicture
                    controlsList="nodownload"
                    crossOrigin="anonymous"
                    src={video.url}
                    style={{ objectFit: "cover", position: "relative" }}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <IconButton
                    component={Link}
                    to={`/${video.slug}`}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={handleScrollPosition}
                  >
                    <ViewIcon
                      style={{
                        color: "white",
                        fontSize: 60,
                        opacity: 0.8,
                      }}
                    />
                  </IconButton>
                </CardActionArea>

                <CardActions>
                  <div
                    style={{
                      marginLeft: "auto",
                    }}
                  >
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleShare(video)}
                      style={{ marginRight: 8 }}
                    >
                      <ShareIcon size="small" />
                    </IconButton>
                    {loggedIn && (
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={(e) => handleMenuClick(e, video)}
                        style={{ marginRight: 8 }}
                      >
                        <MoreIcon />
                      </IconButton>
                    )}
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {loading && (
          <Grid container spacing={4} style={{ marginTop: 10 }}>
            {Array.from(new Array(12)).map((item, index) => (
              <Grid item lg={3} md={6} sm={6} xs={12} key={index}>
                <Card style={{ maxWidth: 380 }}>
                  <CardActionArea component={Link} to="">
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      style={{ height: 180 }}
                    />
                  </CardActionArea>

                  <CardActions
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "auto",
                      }}
                    >
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
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {loggedIn && (
          <React.Fragment>
            <Hidden mdDown>
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
            {!hasMore && (
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
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ListComponent);
