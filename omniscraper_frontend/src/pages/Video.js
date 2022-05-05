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
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LinearProgress from "@mui/material/LinearProgress";
import Toolbar from "@mui/material/Toolbar";
import { calculateTimeSinceSave } from "../utils/calculateTimeLapse";
import "./Video.css";
import MediaCard from "../components/reusableComponents/MediaCard";
import Placeholder from "../components/reusableComponents/Placeholder";
import { SECONDARY } from "../theme";
import DesktopTrendingVideo from "../components/DesktopTrendingVideo";
import Paper from "../components/reusableComponents/Paper";
import TrendingVideosPlaceholder from "../components/reusableComponents/TrendingVideosPlaceholder";
import {connect} from 'react-redux';

const styles = (theme) => ({
  root: {
    flex: 1,
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      padding: 16,
      width: "90vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "91vh",
    },
    width: "100vw",
    height: "94vh",
  },

  autoPlayTrending: false,
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
          variant='determinate'
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
      play: false,
      progressDialogOpen: false,
      downloadProgress: 0,
    };

    this.vidRef = React.createRef();
    this.ref = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.loadVideo();
    }
  }

  componentDidMount = () => {
    this.loadVideo();
  };

  loadVideo = () => {
    // this.handleVideoPlayState();
    this.setState({ loading: true, play: false }, () => {
      const slug = this.props.match.params.slug;
      const url = `/api/${slug}`;
      const { history } = this.props;

      axios
        .get(url, { transformResponse: (data) => JSONbig.parse(data) })
        .then((res) => {
          if (res.status === 200) {
            this.setState(
              {
                video: res.data,
                loading: false,
              },
              () => this.handleVideoPlayState()
            );
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

  handleVideoPlayState = () => {
    if (this.vidRef.current?.paused) {
      this.setState({ play: true });
      this.vidRef.current?.play();
    } else {
      this.setState({ play: false });
      this.vidRef.current?.pause();
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

  handleTrendingVideoClick = (slug) => {
    const { history } = this.props;

    history.push(`/${slug}`);
    this.setState({ autoPlayTrending: true });
  };

  render() {
    const {
      downloadVideo,
      handleSpeedDialOpen,
      handleSpeedDialClose,
      handleVideoPlayState,
      handleShare,
      handleProgressDialogClose,
      handleTrendingVideoClick,
    } = this;
    const { video, loading, speedDialOpen, play, autoPlayTrending } =
      this.state;
    const {
      classes,
      autoplayVideo,
      history,
      loggedIn,
      trendingVideos,
      trendingVideosLoading,
    } = this.props;

    const lapse = calculateTimeSinceSave(video);

    const indexOfHttps = video.text !== null && video.text?.indexOf("https");
    const text =
      video.text !== null && video.text?.slice(0, indexOfHttps).trim();

    const actions = [
      {
        icon: (
          <Download
            color='primary'
            size='small'
            onClick={() => downloadVideo(video)}
          />
        ),
        name: "Download",
      },
      {
        icon: (
          <Button
            href={`https://twitter.com/i/status/${video.parent_tweet_id}`}
            target='_blank'
            rel='noopener noreferrer'
            type='icon'
          >
            <TwitterIcon size='small' color='primary' />
          </Button>
        ),
        name: "Tweet",
      },
      {
        icon: (
          <ShareIcon
            size='small'
            color='primary'
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
        maxWidth='sm'
        open={this.state.progressDialogOpen}
      >
        <DialogTitle className={classes.title}>Download Progress</DialogTitle>
        <DialogContent style={{ marginBottom: 8 }}>
          <LinearProgressWithLabel value={this.state.downloadProgress} />
        </DialogContent>
      </Dialog>
    );

    const otherTrendingVideos = trendingVideos?.filter(
      (trendingVideo) => trendingVideo.id !== video.id
    );

    return (
      <>
        <Toolbar ref={this.ref} />
        <div className={classes.root}>
          {/* Desktop UI */}
          <Hidden mdDown>
            <div className='grid__container'>
              <div className='main'>
                <>
                  {loading ? (
                    <Placeholder
                      style={{ width: "100%" }}
                      height='61vh'
                      view='detail'
                      loggedIn={loggedIn}
                    />
                  ) : (
                    <MediaCard
                      view='detail'
                      device='desktop'
                      displayBottomActions
                      playIconSize={60}
                      style={{
                        width: "100%",
                      }}
                      type='video'
                      height='60vh'
                      src={video.url}
                      handleClick={() => {
                        handleVideoPlayState();
                      }}
                      play={play}
                      leftButton={
                        <Button
                          startIcon={<TwitterIcon style={{ fontSize: 18 }} />}
                          target='_blank'
                          rel='noopener noreferrer'
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
                      autoPlay={autoplayVideo || autoPlayTrending}
                      // loggedIn={loggedIn}
                      text={text}
                      lapse={lapse}
                      ref={this.vidRef}
                    />
                  )}
                </>
              </div>
              <div className='trending'>
                <Paper
                  style={{ paddingLeft: 16, paddingTop: 16, paddingBottom: 4 }}
                >
                  <div
                    style={{
                      marginBottom: 8,
                    }}
                  >
                    <p className='trending__videos__heading'>
                      Trending this week
                    </p>
                  </div>
                  <div className='trending__videos__container'>
                    {trendingVideosLoading || loading ? (
                      <>
                        {Array.from(new Array(5)).map((item, index) => (
                          <TrendingVideosPlaceholder key={index} />
                        ))}
                      </>
                    ) : (
                      <>
                        {otherTrendingVideos.map((video) => {
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
                            <DesktopTrendingVideo
                              key={video.id}
                              type={
                                video.video_thumbnail_link_https
                                  ? "image"
                                  : "video"
                              }
                              url={url}
                              lapse={lapse}
                              text={text}
                              height={80}
                              handleClick={() =>
                                handleTrendingVideoClick(video.slug)
                              }
                              play={play}
                            />
                          );
                        })}
                      </>
                    )}
                  </div>
                </Paper>
              </div>
            </div>
          </Hidden>

          {/* mobile UI */}
          <Hidden mdUp>
            {downloadProgress}
            <>
              {loading ? (
                <Placeholder
                  style={{ width: "100vw" }}
                  height='42vh'
                  view='list'
                  loggedIn={loggedIn}
                />
              ) : (
                <MediaCard
                  displayBottomActions
                  playIconSize={60}
                  view='detail'
                  device='mobile'
                  src={video.url}
                  play={play}
                  handleClick={() => handleVideoPlayState()}
                  autoPlay={autoplayVideo}
                  height='42vh'
                  style={{ width: "100vw" }}
                  ref={this.vidRef}
                  type='video'
                  text={text}
                  lapse={lapse}
                  leftButton={
                    <Button
                      type='icon'
                      target='_blank'
                      rel='noopener noreferrer'
                      href={`https://twitter.com/i/status/${video.parent_tweet_id}`}
                    >
                      <TwitterIcon style={{ fontSize: 18 }} />
                    </Button>
                  }
                  rightButton={
                    <Button
                      type='icon'
                      onClick={() => downloadVideo(video)}
                      style={{ marginLeft: 8 }}
                    >
                      <Download style={{ fontSize: 18 }} />
                    </Button>
                  }
                />
              )}
              <div
                style={{
                  padding: 16,
                  paddingTop: 24,
                  padingBottom: 0,
                }}
              >
                <p
                  className='trending__videos__heading'
                  style={{ paddingBottom: 0 }}
                >
                  Trending this week
                </p>
              </div>

              <div className='trending__videos__mobile'>
                {trendingVideosLoading || loading ? (
                  Array.from(new Array(5)).map((item, idx) => (
                    <div className='trending__video__mobile'>
                      <Placeholder
                        key={idx}
                        style={{ width: "35vw" }}
                        height='20vh'
                        view='list'
                        hideTextContainer
                      />
                    </div>
                  ))
                ) : (
                  <>
                    {otherTrendingVideos.map((video) => {
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
                        <div className='trending__video__mobile' key={video.id}>
                          <MediaCard
                            displayBottomActions
                            playIconSize={40}
                            view='list'
                            src={url}
                            play={true}
                            handleClick={() =>
                              handleTrendingVideoClick(video.slug)
                            }
                            autoPlay={autoplayVideo}
                            height='20vh'
                            style={{ width: "35vw" }}
                            type={
                              video.video_thumbnail_link_https
                                ? "image"
                                : "video"
                            }
                            lapse={lapse}
                          />
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </>
          </Hidden>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {return{...state.users}}

export default connect(mapStateToProps)(withStyles(styles)(withRouter(Video)));
