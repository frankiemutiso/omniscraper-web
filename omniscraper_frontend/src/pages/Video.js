import Button from "../components/reusableComponents/Button";
import Hidden from "@mui/material/Hidden";
import withStyles from "@mui/styles/withStyles";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
import Download from "@mui/icons-material/Download";
import TwitterIcon from "@mui/icons-material/Twitter";
import JSONbig from "json-bigint";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Link from "@mui/material/Link";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LinearProgress from "@mui/material/LinearProgress";
import Toolbar from "@mui/material/Toolbar";
import { calculateTimeSinceSave } from "../utils/calculateTimeLapse";
import "./Video.css";
import MediaCard from "../components/reusableComponents/MediaCard";
import Placeholder from "../components/reusableComponents/Placeholder";
import Spinner from "../components/reusableComponents/Spinner";
import { SECONDARY } from "../theme";

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
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "100%", marginRight: "16px" }}>
        <LinearProgress
          variant="determinate"
          {...props}
          style={{ height: "8px", borderRadius: "5px" }}
        />
      </div>
      <div style={{ minWidth: "35px" }}>
        <p style={{ color: SECONDARY, fontWeight: 600 }}>{`${Math.round(
          props.value
        )}%`}</p>
      </div>
    </div>
  );
}

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
    const { classes, autoplayVideo, history, loggedIn } = this.props;

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
        onClose={handleProgressDialogClose}
        fullWidth
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
              {loading ? (
                <Placeholder
                  style={{ width: "80vw" }}
                  height="65vh"
                  screen="detail"
                  loggedIn={loggedIn}
                />
              ) : (
                <MediaCard
                  screen="detail"
                  device="desktop"
                  style={{
                    width: "80vw",
                  }}
                  type="video"
                  height="65vh"
                  src={video.url}
                  handleClick={() => {
                    handleToggle();
                  }}
                  play={play}
                  leftButton={
                    <Button
                      type="link"
                      startIcon={<TwitterIcon style={{ fontSize: 18 }} />}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://twitter.com/i/status/${video.parent_tweet_id}`}
                    >
                      Tweet
                    </Button>
                  }
                  rightButton={
                    <Button
                      startIcon={<Download style={{ fontSize: 18 }} />}
                      onClick={() => downloadVideo(video)}
                      style={{ marginLeft: 16 }}
                    >
                      Download
                    </Button>
                  }
                  autoPlay={autoplayVideo}
                  // loggedIn={loggedIn}
                  text={text}
                  lapse={lapse}
                  ref={this.vidRef}
                />
              )}
            </>
          </Hidden>

          {/* mobile UI */}
          <Hidden smUp>
            {downloadProgress}
            {loading ? (
              <div
                style={{
                  width: "100vw",
                  height: "100vh",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Spinner size={40} color={SECONDARY} />
              </div>
            ) : (
              <MediaCard
                screen="detail"
                device="mobile"
                src={video.url}
                play={play}
                handleClick={handleToggle}
                autoPlay={autoplayVideo}
                height="100vh"
                style={{ width: "100vw" }}
                ref={this.vidRef}
                type="video"
              />
            )}
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
