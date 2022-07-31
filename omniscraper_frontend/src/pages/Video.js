import Button from '../components/reusableComponents/Button';
import Hidden from '@mui/material/Hidden';
import withStyles from '@mui/styles/withStyles';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router';
import Download from '@mui/icons-material/Download';
import TwitterIcon from '@mui/icons-material/Twitter';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import ShareIcon from '@mui/icons-material/Share';
import JSONbig from 'json-bigint';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LinearProgress from '@mui/material/LinearProgress';
import Toolbar from '@mui/material/Toolbar';
import { calculateTimeSinceSave } from '../utils/calculateTimeLapse';
import './Video.css';
import MediaCard from '../components/reusableComponents/MediaCard';
import Placeholder from '../components/reusableComponents/Placeholder';
import { SECONDARY } from '../theme';
import DesktopTrendingVideo from '../components/DesktopTrendingVideo';
import Paper from '../components/reusableComponents/Paper';
import TrendingVideosPlaceholder from '../components/reusableComponents/TrendingVideosPlaceholder';
import Modal from '../components/reusableComponents/Modal';
import { axiosInstance } from '../utils/axiosInstance';
import { connect } from 'react-redux';
import { postFlagRequest } from '../store/actions/flagRequestsActions';
import FlagRequestDialog from '../components/FlagRequestDialog';

const styles = (theme) => ({
	root: {
		flex: 1,
		margin: 'auto',
		[theme.breakpoints.up('md')]: {
			padding: 16,
			width: '90vw',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			minHeight: '91vh',
		},
		[theme.breakpoints.down('sm')]: { paddingTop: 8, paddingBottom: 16 },
		width: '100vw',
	},

	autoPlayTrending: false,
});

function LinearProgressWithLabel(props) {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<div style={{ width: '100%', marginRight: '16px' }}>
				<LinearProgress
					variant='determinate'
					{...props}
					style={{ height: '8px', borderRadius: '5px' }}
				/>
			</div>
			<div style={{ minWidth: '35px' }}>
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
			flagging: false,
			reportPromptOpen: false,
			clickedVideo: null,
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
				.get(url, {
					transformResponse: (data) => JSONbig.parse(data),
					onDownloadProgress: (progressEvent) => {
						console.log(`Event: ${progressEvent.total}`);
					},
				})
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
						history.push({ pathname: '/' });
					}
				})
				.catch((err) => {
					history.push({ pathname: '/' });
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
			method: 'GET',
			responseType: 'blob',
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
					type: 'video/mp4',
				})
			);
			const link = document.createElement('a');
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

	handleVideoPlayState = (e) => {
		console.log('Current time: ', this.vidRef.current.currentTime);
		console.log('Duration: ', this.vidRef.current.duration);

		if (this.vidRef.current?.paused) {
			this.setState({ play: true });
			this.vidRef.current?.play();
		} else {
			this.setState({ play: false });
			this.vidRef.current?.pause();
		}
	};

	handlePlayTime = () => {};

	handleShare = (video) => {
		if (navigator.share) {
			navigator
				.share({
					url: video.slug,
				})
				.then(() => {
					// this.setState({ snackBarOpen: true, shareSuccessful: true });
					console.log('Thanks for sharing!');
				})
				.catch((err) => {
					// this.setState({ snackBarOpen: true, shareSuccessful: false });
					console.log(`Couldn't share url because of ${err.message}`);
				});
		} else {
			// this.setState({ snackBarOpen: true, shareSupported: false });
			console.log('Web share not supported!');
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
						this.setState({ flagging: false });
						this.closeReportPrompt();
					}
				})
				.catch((err) => {
					this.setState({ flagging: false });
					this.closeReportPrompt();
				});
		});
	};

	openReportPrompt = (clickedVideo) => {
		this.setState({ reportPromptOpen: true, clickedVideo });
	};

	closeReportPrompt = () => {
		this.setState({ reportPromptOpen: false });
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
			flagVideo,
			openReportPrompt,
			closeReportPrompt,
		} = this;
		const {
			video,
			loading,
			speedDialOpen,
			play,
			autoPlayTrending,
			flagging,
			reportPromptOpen,
			clickedVideo,
		} = this.state;
		const {
			classes,
			autoplayVideo,
			history,
			loggedIn,
			trendingVideos,
			trendingVideosLoading,
		} = this.props;

		const lapse = calculateTimeSinceSave(video);

		const indexOfHttps = video.text !== null && video.text?.indexOf('https');
		const text =
			video.text !== null && video.text?.slice(0, indexOfHttps).trim();

		const reportDialog = (
			<>
				<Modal
					type='report'
					open={reportPromptOpen}
					handleClose={closeReportPrompt}
					title='Report?'
					handleRightButtonClick={() => flagVideo(clickedVideo)}
					isSpinning={flagging}
				/>
			</>
		);

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
				{/* {reportDialog} */}
				<FlagRequestDialog
					open={reportPromptOpen}
					handleClose={closeReportPrompt}
					videoSlug={video?.slug}
				/>
				{/* <Toolbar ref={this.ref} /> */}
				<div className={classes.root}>
					{/* Desktop UI */}
					<Hidden mdDown>
						<div className='grid__container'>
							<div className='main'>
								<>
									{loading ? (
										<Placeholder
											style={{ width: '100%' }}
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
												width: '100%',
											}}
											type='video'
											height='60vh'
											src={video.url}
											handleClick={(e) => {
												handleVideoPlayState(e);
											}}
											play={play}
											buttons={
												<>
													{loggedIn && (
														<Button
															type='icon'
															onClick={() => openReportPrompt(video)}
															style={{ marginRight: 8 }}
														>
															<FlagCircleIcon style={{ fontSize: 18 }} />
														</Button>
													)}
													<Button
														type='icon'
														target='_blank'
														rel='noopener noreferrer'
														href={`https://twitter.com/i/status/${video.parent_tweet_id}`}
													>
														<TwitterIcon style={{ fontSize: 18 }} />
													</Button>

													<Button
														type='icon'
														onClick={() => handleShare(video)}
														style={{ margin: '0 8px' }}
													>
														<ShareIcon style={{ fontSize: 18 }} />
													</Button>
													<Button
														type='icon'
														onClick={() => downloadVideo(video)}
													>
														<Download style={{ fontSize: 18 }} />
													</Button>
												</>
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
												{Array.from(new Array(10)).map((item, index) => (
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
														video.text !== null && video.text.indexOf('https');
													const text =
														video.text !== null &&
														video.text.slice(0, indexOfHttps).trim();

													const lapse = calculateTimeSinceSave(video);

													return (
														<DesktopTrendingVideo
															key={video.id}
															type={
																video.video_thumbnail_link_https
																	? 'image'
																	: 'video'
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
									style={{ width: '100vw' }}
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
									style={{ width: '100vw' }}
									ref={this.vidRef}
									type='video'
									text={text}
									lapse={lapse}
									buttons={
										<>
											{loggedIn && (
												<Button
													type='icon'
													onClick={() => openReportPrompt(video)}
													style={{ margin: '0 4px' }}
												>
													<FlagCircleIcon style={{ fontSize: 18 }} />
												</Button>
											)}
											<Button
												type='icon'
												target='_blank'
												rel='noopener noreferrer'
												href={`https://twitter.com/i/status/${video.parent_tweet_id}`}
												style={{ margin: '0 4px' }}
											>
												<TwitterIcon style={{ fontSize: 18 }} />
											</Button>

											<Button
												type='icon'
												onClick={() => handleShare(video)}
												style={{ margin: '0 4px' }}
											>
												<ShareIcon style={{ fontSize: 18 }} />
											</Button>
											<Button
												type='icon'
												onClick={() => downloadVideo(video)}
												style={{ margin: '0 4px' }}
											>
												<Download style={{ fontSize: 18 }} />
											</Button>
										</>
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
												style={{ width: '35vw' }}
												height='25vh'
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
												video.text !== null && video.text.indexOf('https');
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
														height='25vh'
														style={{ width: '35vw' }}
														type={
															video.video_thumbnail_link_https
																? 'image'
																: 'video'
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

const mapStateToProps = (state) => ({ ...state.flagRequests });
const mapDispatchToProps = { postFlagRequest };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(withRouter(Video)));
