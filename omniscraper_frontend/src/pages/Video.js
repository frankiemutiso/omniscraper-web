import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import ViewIcon from "@material-ui/icons/PlayArrow";
import ShareIcon from "@material-ui/icons/Share";

import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
import Download from "@material-ui/icons/ArrowDownward";
import TwitterIcon from "@material-ui/icons/Twitter";
import JSONbig from "json-bigint";
import Skeleton from "@material-ui/lab/Skeleton";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import Link from "@material-ui/core/Link";

const styles = (theme) => ({
  root: {
    flex: 1,
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: "85vw",
      paddingTop: 80,
    },
    paddingTop: "7.1vh",
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
    };

    this.vidRef = React.createRef();
  }

  componentDidMount = () => {
    this.loadVideo();
  };

  loadVideo = () => {
    this.setState({ loading: true }, () => {
      const slug = this.props.match.params.slug;
      const url = `/api/${slug}`;

      axios
        .get(url, { transformResponse: (data) => JSONbig.parse(data) })
        .then((res) => {
          this.setState({
            video: res.data,
            loading: false,
          });
        })
        .catch((err) =>
          this.setState({
            error: err.message,
            loading: false,
          })
        );
    });
  };

  downloadVideo = (video) => {
    const videoURL = video.url;
    const slug = video.slug;

    axios({
      url: videoURL,
      method: "GET",
      responseType: "blob",
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

  render() {
    const {
      downloadVideo,
      handleSpeedDialOpen,
      handleSpeedDialClose,
      handleToggle,
      handleShare,
    } = this;
    const { video, loading, speedDialOpen, play } = this.state;
    const { classes } = this.props;

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
          >
            <TwitterIcon size="small" color="primary" />
          </IconButton>
        ),
        name: "Source",
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

    return (
      <div className={classes.root}>
        {/* Desktop UI */}
        <Hidden mdDown>
          <Card style={{ width: 640 }}>
            <CardActionArea>
              {loading ? (
                <Skeleton
                  animation="wave"
                  variant="rect"
                  style={{ height: 360 }}
                />
              ) : (
                <CardMedia
                  component="video"
                  height="360"
                  src={video.url}
                  style={{ objectFit: "contain" }}
                  controls
                  crossOrigin="anonymous"
                  disablePictureInPicture
                  autoplay
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                />
              )}
            </CardActionArea>
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {loading ? (
                <React.Fragment>
                  <Skeleton animation="wave" height={45} width={80} />
                  <Skeleton animation="wave" height={45} width={80} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<TwitterIcon />}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://twitter.com/i/status/${video.parent_tweet_id}`}
                  >
                    Source
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    startIcon={<Download />}
                    onClick={() => downloadVideo(video)}
                  >
                    Download
                  </Button>
                </React.Fragment>
              )}
            </CardActions>
          </Card>
        </Hidden>

        {/* mobile UI */}
        <Hidden mdUp>
          <Card style={{ width: "100vw" }}>
            <CardActionArea>
              <CardMedia
                ref={this.vidRef}
                component="video"
                crossOrigin="anonymous"
                src={video.url}
                style={{
                  objectFit: "contain",
                  height: "92.9vh",
                  position: "relative",
                }}
                onClick={handleToggle}
                autoPlay
                disablePictureInPicture
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
              />
              {/* {play !== true && ( */}
              <IconButton
                onClick={handleToggle}
                style={{
                  display: play === false ? "block" : "none",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transition: "100ms ease-in-out",
                }}
              >
                <ViewIcon
                  style={{
                    color: "white",
                    fontSize: 80,
                    opacity: 0.8,
                  }}
                />
              </IconButton>
              {/* )} */}
            </CardActionArea>
          </Card>
          <SpeedDial
            ariaLabel="SpeedDial example"
            className={classes.speedDial}
            // hidden={hidden}
            icon={<SpeedDialIcon />}
            onClose={handleSpeedDialClose}
            onOpen={handleSpeedDialOpen}
            open={speedDialOpen}
            direction="up"
          >
            {actions.map((action) => (
              <SpeedDialAction
                component={Link}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                // tooltipOpen
                onClick={handleSpeedDialClose}
              />
            ))}
          </SpeedDial>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Video));
