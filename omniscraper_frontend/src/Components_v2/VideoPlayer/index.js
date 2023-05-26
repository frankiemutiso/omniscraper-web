import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { getStrippedVideoText, shareVideo } from '../../utils/utilFunctions';
import IconButton from '../IconButton';
import downloadIcon from '../../assets/download.svg';
import twitterIcon from '../../assets/twitter.svg';
import shareIcon from '../../assets/share.svg';
import VideoPlayerActions from './VideoPlayerActions';
import { downloadVideo, flagVideo } from '../../store/actions/videosActions';

const redirectToTweet = (parentTweetId) => {
	window.open(`https://twitter.com/i/status/${parentTweetId}`, '_blank');
};

function VideoPlayer({
	videoUrl,
	videoText,
	elapsedTime,
	handleVideoDownload,
	parentTweetId,
	videoSlug,
}) {
	let videoRef = useRef(null);

	const [videoDuration, setVideoDuration] = useState(null);
	const [canShowAction, setActionsState] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [isFullScreen, setFullScreen] = useState(false);
	const [isMuted, setMuteState] = useState(false);
	const [isPlaying, setPlayState] = useState(false);
	const [volumeLevel, setVolumeLevel] = useState(0);

	useEffect(() => {
		const handleFullscreenChange = () => {
			const element = document.getElementById('videoPlayer');

			if (document.fullscreenElement) {
				element.classList.remove('videoPlayer');
				element.classList.add('videoPlayer-fullscreen');
				setFullScreen(true);
			} else {
				element.classList.remove('videoPlayer-fullscreen');
				element.classList.add('videoPlayer');
				setFullScreen(false);
			}
		};

		window.addEventListener('fullscreenchange', handleFullscreenChange);

		return () => {
			window.removeEventListener('fullscreenchange', handleFullscreenChange);
		};
	}, []);

	const handlePlayState = () => {
		const current = videoRef?.current;

		if (!current) {
			return;
		}

		if (current.paused) {
			current.play();
			setPlayState(true);
			return;
		}

		current.pause();
		setPlayState(false);
	};

	const getVideoMetadata = () => {
		const videoDuration = videoRef?.current.duration;
		const volumeLevel = videoRef?.current.volume;

		setVideoDuration(videoDuration);
		setVolumeLevel(volumeLevel * 100);
	};

	const updateCurrentTime = () => {
		const currentTime = videoRef?.current.currentTime;
		setCurrentTime(currentTime);

		if (currentTime > 0 && !videoRef?.current?.paused) {
			setPlayState(true);
		}
	};

	const handleMouseEnter = () => {
		setActionsState(true);
	};

	const changeCurrentTime = (currentTime) => {
		const target = videoRef?.current;
		target.currentTime = currentTime;

		setCurrentTime(currentTime);
	};

	const toggleFullscreen = () => {
		const element = document.getElementById('videoPlayer');

		if (document.fullscreenElement) {
			element.classList.remove('videoPlayer-fullscreen');
			element.classList.add('videoPlayer');
			setFullScreen(false);
			document.exitFullscreen();
		} else {
			document.getElementById('videoPlayer-container').requestFullscreen();

			element.classList.remove('videoPlayer');
			element.classList.add('videoPlayer-fullscreen');
			setFullScreen(true);
		}
	};

	const handleVolumeBtnClick = () => {
		const target = videoRef?.current;

		if (target?.muted) {
			target.volume = 1;

			target.muted = false;
			setMuteState(false);
			setVolumeLevel(100);
		} else {
			target.volume = 0;

			target.muted = true;
			setMuteState(true);
			setVolumeLevel(0);
		}
	};

	const handleVolumeChange = (e) => {
		const videoTarget = videoRef?.current;

		let target = e?.currentTarget;
		let rect = target.getBoundingClientRect();

		const mouseXPos = e.clientX - rect.left;
		const vol = Number((mouseXPos / rect?.width).toFixed(1));

		videoTarget.volume = vol;

		setVolumeLevel(vol * 100);
	};

	const strippedText = getStrippedVideoText(videoText);

	return (
		<div>
			<div className='videoPlayer-container' id='videoPlayer-container'>
				<video
					ref={videoRef}
					autoPlay={true}
					disablePictureInPicture
					controlsList='nodownload'
					onContextMenu={(e) => e.preventDefault()}
					className='videoPlayer lg:rounded-lg'
					onMouseEnter={() => handleMouseEnter()}
					onMouseLeave={() => setActionsState(false)}
					onLoadedMetadata={() => getVideoMetadata()}
					onTimeUpdate={(e) => updateCurrentTime()}
					onEnded={() => setPlayState(false)}
					id='videoPlayer'
					onClick={() => handlePlayState()}
				>
					<source src={videoUrl} type='video/mp4' />
				</video>
				<VideoPlayerActions
					canShowAction={canShowAction}
					setActionsState={setActionsState}
					handlePlayState={handlePlayState}
					videoDuration={videoDuration}
					currentTime={currentTime}
					changeCurrentTime={changeCurrentTime}
					toggleFullscreen={toggleFullscreen}
					isFullScreen={isFullScreen}
					handleVolumeBtnClick={handleVolumeBtnClick}
					isMuted={isMuted}
					isPlaying={isPlaying}
					volumeLevel={volumeLevel}
					handleVolumeChange={handleVolumeChange}
				/>
			</div>
			<div className='mt-4 videoPlayer-video-info'>
				{strippedText && strippedText.length > 0 ? (
					<div className=''>
						<p className='videoPlayer-text lg:text-lg font-semibold'>
							{strippedText}
						</p>
					</div>
				) : null}
				<div className='videoPlayer-actions mt-2 flex justify-between items-center'>
					{elapsedTime ? (
						<p className='videoCard-elapsed-time text-sm'>{elapsedTime}</p>
					) : null}
					<div>
						<IconButton
							show={true}
							style={{ marginLeft: '32px !important' }}
							onClick={() => redirectToTweet(parentTweetId)}
						>
							<img src={twitterIcon} />
						</IconButton>
						<IconButton
							show={true}
							style={{ marginLeft: '32px !important' }}
							onClick={() => shareVideo(videoSlug)}
						>
							<img src={shareIcon} />
						</IconButton>
						<IconButton
							show={true}
							style={{ marginLeft: '32px !important' }}
							onClick={() => handleVideoDownload()}
						>
							<img src={downloadIcon} />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoPlayer;
