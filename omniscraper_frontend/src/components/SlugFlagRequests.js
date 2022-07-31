import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import withStyles from '@mui/styles/withStyles';
import Hidden from '@mui/material/Hidden';
import CommentIcon from '@mui/icons-material/Comment';
import {
	getGroupedFlagRequests,
	submitFlagRequestsApprovalStatus,
} from '../store/actions/flagRequestsActions';
import { flagVideo, getVideo } from '../store/actions/videosActions';
import MediaCard from './reusableComponents/MediaCard';
import Placeholder from './reusableComponents/Placeholder';
import Button from './reusableComponents/Button';
import { calculateTimeSinceSave } from '../utils/calculateTimeLapse';
import './SlugFlagRequests.css';
import Modal from './reusableComponents/Modal';

const styles = (theme) => ({
	root: {
		flex: 1,
		margin: 'auto',
		// padding: 16,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		marginTop: 40,
		[theme.breakpoints.down('sm')]: {
			marginTop: 8,
		},
	},
});

class SlugFlagRequests extends Component {
	constructor(props) {
		super(props);

		this.vidRef = createRef();
		this.state = { play: true, reportedVideo: null, reportPromptOpen: false };
	}
	componentDidMount = async () => {
		await this.getFlagRequestsDetails();
		await this.loadVideo();
	};

	getFlagRequestsDetails = async () => {
		const { getGroupedFlagRequests, slug } = this.props;

		await getGroupedFlagRequests(slug);
	};

	loadVideo = async () => {
		const { getVideo, slug } = this.props;

		await getVideo(slug);

		const { videoObject } = this.props;
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

	handleFlagRequestsRejection = async (video) => {
		const { submitFlagRequestsApprovalStatus } = this.props;
		const requestStatus = 'Rejected';
		const slug = video.slug;

		await submitFlagRequestsApprovalStatus(slug, requestStatus);
	};

	handleFlagRequestsApproval = async () => {
		const {
			submitFlagRequestsApprovalStatus,
			flagVideo,
			approvalStatusSubmissionError,
		} = this.props;
		const { reportedVideo } = this.state;

		const flagged = true;
		const slug = reportedVideo.slug;
		const requestStatus = 'Approved';

		await submitFlagRequestsApprovalStatus(slug, requestStatus);
		await flagVideo(slug, flagged);

		if (!approvalStatusSubmissionError) {
			this.closeReportPrompt();
		}
	};

	openReportPrompt = (video) => {
		this.setState({ reportPromptOpen: true, reportedVideo: video });
	};

	closeReportPrompt = () => {
		this.setState({ reportPromptOpen: false });
	};

	render() {
		const {
			classes,
			videoObject,
			videoLoading,
			slugFlagRequests,
			slugFlagRequestsLoading,
			flagRequestsList,
			flaggingVideo,
		} = this.props;
		const {
			handleVideoPlayState,
			handleFlagRequestsRejection,
			handleFlagRequestsApproval,
			closeReportPrompt,
			openReportPrompt,
		} = this;
		const { play, reportPromptOpen, reportedVideo } = this.state;

		const video = videoObject !== null && videoObject;

		const lapse = calculateTimeSinceSave(video);

		const indexOfHttps = video.text !== null && video.text?.indexOf('https');
		const text =
			video.text !== null && video.text?.slice(0, indexOfHttps).trim();

		const requestStatus = flagRequestsList?.find(
			(x) => x.slug == videoObject?.slug
		)?.request_status;

		const reportDialog = (
			<Modal
				type='report'
				open={reportPromptOpen}
				handleClose={closeReportPrompt}
				title='Report?'
				handleRightButtonClick={() => handleFlagRequestsApproval()}
				isSpinning={flaggingVideo}
			/>
		);

		return (
			<div className='slug__flag__requests-container'>
				{reportDialog}
				<div className={classes.root}>
					{/* Desktop UI */}
					<Hidden mdDown>
						{videoLoading || slugFlagRequestsLoading ? (
							<Placeholder
								style={{ width: '100%' }}
								height='61vh'
								view='detail'
								// loggedIn={loggedIn}
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
									requestStatus == 'Pending' && (
										<>
											<Button
												type='outlined'
												onClick={() => handleFlagRequestsRejection(video)}
											>
												Reject
											</Button>
											<Button
												onClick={() => openReportPrompt(video)}
												style={{ margin: '0 8px' }}
											>
												Approve
											</Button>
										</>
									)
								}
								autoPlay={false}
								text={text}
								lapse={lapse}
								ref={this.vidRef}
							/>
						)}
					</Hidden>

					{/* Mobile UI */}
					<Hidden mdUp>
						{videoLoading || slugFlagRequestsLoading ? (
							<Placeholder
								style={{ width: '100vw' }}
								height='42vh'
								view='list'
								// loggedIn={loggedIn}
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
								autoPlay={false}
								height='42vh'
								style={{ width: '100vw' }}
								ref={this.vidRef}
								type='video'
								text={text}
								lapse={lapse}
								buttons={
									requestStatus == 'Pending' && (
										<>
											<Button
												type='outlined'
												onClick={() => handleFlagRequestsRejection(video)}
											>
												Reject
											</Button>
											<Button
												onClick={() => openReportPrompt(video)}
												style={{ margin: '0 8px' }}
											>
												Approve
											</Button>
										</>
									)
								}
							/>
						)}
					</Hidden>
				</div>
				{/* <hr className='slug__flag__requests-hr' /> */}
				<div className='slug__flag__requests-reasons'>
					<div
						style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}
					>
						<CommentIcon style={{ margin: '0 8px', color: '#423f3e' }} />
						<div>
							<h4 className='slug__flag__requests-h3'>Reasons</h4>
						</div>
					</div>
					<ul>
						{slugFlagRequests.map((x) => {
							const date = new Date(`${x.date_requested}`);
							const formattedDate = date.toLocaleString();

							return (
								<>
									<li className='slug__flag__requests-li'>
										<div>
											<p className='slug__flag__requests-reason'>
												{x.flagging_reason}
											</p>
										</div>
										<div>
											<p className='slug__flag__requests-date'>
												Requested {formattedDate}
											</p>
										</div>
									</li>
								</>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ ...state.flagRequests, ...state.videos });
const mapDispatchToProps = {
	getGroupedFlagRequests,
	getVideo,
	submitFlagRequestsApprovalStatus,
	flagVideo,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(SlugFlagRequests));
