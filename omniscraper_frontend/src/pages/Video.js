import Button from "../components/reusableComponents/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Hidden from "@mui/material/Hidden";
import withStyles from "@mui/styles/withStyles";
import IconButton from "@mui/material/IconButton";
import ViewIcon from "@mui/icons-material/PlayArrow";
import ShareIcon from "@mui/icons-material/Share";
import BackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
import Download from "@mui/icons-material/Download";
import TwitterIcon from "@mui/icons-material/Twitter";
import JSONbig from "json-bigint";
import Skeleton from "@mui/material/Skeleton";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Link from "@mui/material/Link";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import { calculateTimeSinceSave } from "../utils/calculateTimeLapse";
import "./Video.css";

const styles = (theme) => ({
  root: {
    flex: 1,
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "85vw",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  speedDial: {
    margin: 0,
    left: "auto",
    top: "auto",
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    textTransform: "none",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
  mobileCardMedia: {
    objectFit: "contain",
    height: `${100 - 48 * 0.16}vh`,
    position: "relative",
  },
});

function LinearProgressWithLabel(props) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "100%", mr: 2 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          style={{ height: 8, borderRadius: 5 }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="primary">{`${Math.round(
          props.value
        )}%`}</Typography>
        {/* <Chip label={`${Math.round(props.value)}%`} color="primary" /> */}
      </Box>
    </Box>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export class Video extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
      video: {},
      speedDialOpen: true,
      play: true,
      progressDialogOpen: false,
      downloadProgress: 0,
    };

    this.vidRef = React.createRef();
    this.ref = React.createRef();
  }

  componentDidMount = () => {
    this.loadVideo();
  };

  loadVideo = () => {
    this.setState({ loading: true }, () => {
      const slug = this.props.match.params.slug;
      const url = `/api/${slug}`;
      const { history } = this.props;

      axios
        .get(url, { transformResponse: (data) => JSONbig.parse(data) })
        .then((res) => {
          if (res.status === 200) {
            this.setState({
              video: res.data,
              loading: false,
            });
          } else {
            history.push({ pathname: "/" });
          }
        })
        .catch((err) => {
          history.push({ pathname: "/" });
          this.setState({
            error: err.message,
            loading: false,
          });
        });
    });
  };

  downloadVideo = (video) => {
    const videoURL = video.url;
    const slug = video.slug;

    axios({
      url: videoURL,
      method: "GET",
      responseType: "blob",
      onDownloadProgress: (progressEvent) => {
        let downloadProgress = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );

        this.setState({
          progressDialogOpen: true,
          downloadProgress: downloadProgress,
        });

        if (downloadProgress === 100) {
          this.handleProgressDialogClose();
        }
      },
    }).then((response) => {
      const url = window.URL.createObjectURL(
        new Blob([response.data], {
          type: "video/mp4",
        })
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = `${slug}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  };

  handleSpeedDialOpen = () => {
    this.setState({ speedDialOpen: true });
  };

  handleSpeedDialClose = () => {
    this.setState({ speedDialOpen: false });
  };

  handleToggle = () => {
    if (this.vidRef.current.paused) {
      this.setState({ play: true });
      this.vidRef.current.play();
    } else {
      this.setState({ play: false });
      this.vidRef.current.pause();
    }
  };

  handleShare = (video) => {
    if (navigator.share) {
      navigator
        .share({
          url: video.slug,
        })
        .then(() => {
          // this.setState({ snackBarOpen: true, shareSuccessful: true });
          console.log("Thanks for sharing!");
        })
        .catch((err) => {
          // this.setState({ snackBarOpen: true, shareSuccessful: false });
          console.log(`Couldn't share url because of ${err.message}`);
        });
    } else {
      // this.setState({ snackBarOpen: true, shareSupported: false });
      console.log("Web share not supported!");
    }
  };

  handleProgressDialogClose = () => {
    this.setState({
      progressDialogOpen: false,
      downloadProgress: 0,
    });
  };

  render() {
    const {
      downloadVideo,
      handleSpeedDialOpen,
      handleSpeedDialClose,
      handleToggle,
      handleShare,
      handleProgressDialogClose,
    } = this;
    const { video, loading, speedDialOpen, play } = this.state;
    const { classes, autoplayVideo, history } = this.props;

    const lapse = calculateTimeSinceSave(video);

    const indexOfHttps = video.text !== null && video.text?.indexOf("https");
    const text =
      video.text !== null && video.text?.slice(0, indexOfHttps).trim();

    const actions = [
      {
        icon: (
          <Download
            color="primary"
            size="small"
            onClick={() => downloadVideo(video)}
          />
        ),
        name: "Download",
      },
      {
        icon: (
          <IconButton
            href={`https://twitter.com/i/status/${video.parent_tweet_id}`}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            <TwitterIcon size="small" color="primary" />
          </IconButton>
        ),
        name: "Tweet",
      },
      {
        icon: (
          <ShareIcon
            size="small"
            color="primary"
            onClick={() => handleShare(video)}
          />
        ),
        name: "Share",
      },
    ];

    const downloadProgress = (
      <Dialog
        // style={{ maxWidth: "100vh" }}
        onClose={handleProgressDialogClose}
        minWidth="sm"
        maxWidth="sm"
        open={this.state.progressDialogOpen}
      >
        <DialogTitle className={classes.title}>Download Progress</DialogTitle>
        <DialogContent style={{ marginBottom: 8 }}>
          <LinearProgressWithLabel value={this.state.downloadProgress} />
        </DialogContent>
      </Dialog>
    );

    return (
      <>
        <Toolbar ref={this.ref} />
        <div
          className={classes.root}
          style={{
            minHeight: "100vh",
          }}
        >
          {/* Desktop UI */}
          <Hidden smDown>
            <>
              {/* <div>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  startIcon={<BackIcon />}
                  onClick={() => {
                    history.push("/");
                  }}
                  style={{ marginBottom: 16 }}
                >
                  Back
                </Button> 
              </div>*/}
              <Card
                elevation={0}
                style={{
                  width: "80vw",
                }}
              >
                <CardActionArea>
                  {loading ? (
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      style={{ height: "65vh" }}
                    />
                  ) : (
                    <>
                      <CardMedia
                        ref={this.vidRef}
                        component="video"
                        src={video.url}
                        style={{
                          objectFit: "contain",
                          height: "65vh",
                          position: "relative",
                        }}
                        // controls
                        crossOrigin="anonymous"
                        disablePictureInPicture
                        onClick={handleToggle}
                        autoPlay={autoplayVideo}
                        controlsList="nodownload"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      <ViewIcon
                        size="large"
                        onClick={handleToggle}
                        style={{
                          color: "white",
                          fontSize: 80,
                          opacity: 0.8,
                          display: play === false ? "block" : "none",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          transition: "all 150ms ease",
                        }}
                      />
                      <div className={classes.controls}></div>
                    </>
                  )}
                </CardActionArea>
                <CardActions>
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        paddingLeft: 8,
                        paddinRight: 8,
                        marginBottom: 8,
                      }}
                    >
                      {loading ? (
                        <>
                          <Skeleton animation="wave" variant="text" />
                          <Skeleton animation="wave" variant="text" />
                        </>
                      ) : (
                        <>
                          {text?.length > 0 && (
                            <Typography variant="caption" color="textPrimary">
                              {text}
                            </Typography>
                          )}
                        </>
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {loading ? (
                        <Skeleton
                          animation="wave"
                          height={30}
                          width={80}
                          style={{
                            marginRight: "auto",
                          }}
                        />
                      ) : (
                        <Typography
                          color="textSecondary"
                          variant="caption"
                          style={{
                            marginRight: "auto",
                            marginLeft: 8,
                          }}
                        >
                          {lapse}
                        </Typography>
                      )}
                      {loading ? (
                        <React.Fragment>
                          <Skeleton animation="wave" height={30} width={80} />
                          <Skeleton
                            animation="wave"
                            height={30}
                            width={80}
                            style={{ marginLeft: 16 }}
                          />
                        </React.Fragment>
                      ) : (
                        <div className="video__buttons">
                          <Button
                            type="link"
                            startIcon={<TwitterIcon style={{ fontSize: 18 }} />}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://twitter.com/i/status/${video.parent_tweet_id}`}
                          >
                            Tweet
                          </Button>
                          <Button
                            startIcon={<Download style={{ fontSize: 18 }} />}
                            onClick={() => downloadVideo(video)}
                            style={{ marginLeft: 16 }}
                          >
                            Download
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardActions>
              </Card>
            </>
          </Hidden>

          {/* mobile UI */}
          <Hidden smUp>
            {downloadProgress}
            <Card elevation={0} style={{ width: "100vw" }}>
              <CardActionArea>
                <CardMedia
                  ref={this.vidRef}
                  component="video"
                  crossOrigin="anonymous"
                  src={video.url}
                  style={{
                    objectFit: "contain",
                    height: "100vh",
                    position: "relative",
                  }}
                  onClick={handleToggle}
                  autoPlay={autoplayVideo}
                  disablePictureInPicture
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <ViewIcon
                  size="large"
                  style={{
                    color: "white",
                    fontSize: 80,
                    opacity: 0.8,
                    display: play === false ? "block" : "none",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    transition: "all 150ms ease",
                  }}
                />
              </CardActionArea>
            </Card>
            <SpeedDial
              ariaLabel="Twitter Video SpeedDial"
              className={classes.speedDial}
              icon={<SpeedDialIcon />}
              onClose={handleSpeedDialClose}
              onOpen={handleSpeedDialOpen}
              open={speedDialOpen}
              direction="up"
              color="secondary"
            >
              {actions.map((action) => (
                <SpeedDialAction
                  component={Link}
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  tooltipOpen
                  onClick={handleSpeedDialClose}
                />
              ))}
            </SpeedDial>
          </Hidden>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(Video));
