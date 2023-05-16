import React, { useEffect, useState } from 'react';
import './index.css';
import IconButton from './IconButton';

import playIcon from '../../../assets/play.svg';
import pauseIcon from '../../../assets/pause.svg';
import volumeIcon from '../../../assets/volume.svg';
import volumeOffIcon from '../../../assets/volume_off.svg';

import fullscreenIcon from '../../../assets/fullscreen.svg';
import fullscreenExitIcon from '../../../assets/fullscreen_exit.svg';

function formatVideoTime(time) {
	if (time < 60) {
		return `00: ${Math.floor(time).toString().padStart(2, '0')}`;
	}

	const minutes = Math.floor(time / 60)
		.toString()
		.padStart(2, '0');
	const seconds = Math.floor(time % 60)
		.toString()
		.padStart(2, '0');

	return `${minutes}:${seconds}`;
}

function VideoPlayerActions({
	canShowAction,
	setActionsState,
	handlePlayState,
	videoDuration,
	currentTime,
	changeCurrentTime,
	toggleFullscreen,
	isFullScreen,
	handleVolumeBtnClick,
	isMuted,
	isPlaying,
	volumeLevel,
	handleVolumeChange,
}) {
	const [canShowDraggablePoint, setDraggablePointState] = useState(false);
	const [isHovered, setVolumeHover] = useState(false);

	const handleCurrentTimeChange = (e) => {
		let target = e?.currentTarget;
		let rect = target.getBoundingClientRect();
		let width = rect?.width;

		const mouseXPos = e.clientX - rect.left;
		const percentage = mouseXPos / width;
		const currentTime = Number(percentage * videoDuration).toFixed(5);

		changeCurrentTime(currentTime);
	};

	const videoProgress = Math.floor((currentTime / videoDuration) * 100);

	return (
		<div
			className={
				canShowAction || !isPlaying
					? 'videoPlayerActions px-2 w-full'
					: 'videoPlayerActions-hide'
			}
			onMouseEnter={() => setActionsState(true)}
			// onMouseLeave={() => setActionsState(false)}
		>
			<div
				className='videoPlayerActions-track bg-neutral-600 h-1 w-full'
				onMouseEnter={() => setDraggablePointState(true)}
				onMouseLeave={() => setDraggablePointState(false)}
				onClick={(e) => handleCurrentTimeChange(e)}
				style={{ position: 'relative', cursor: 'pointer' }}
			>
				<div
					className='bg-neutral-200 h-1 transition duration-1000 ease-in'
					style={{
						width: `${videoProgress}%`,
						position: 'absolute',
					}}
				/>
				{/* {canShowDraggablePoint ? (
					<div
						className='bg-neutral-200 h-3 w-3 rounded-full transition duration-1000 ease-in'
						style={{
							position: 'absolute',
							top: -4,
							left: `${videoProgress - 0.6}%`,
							transform: 'transform: translate(50%, 0)',
						}}
					/>
				) : null} */}
			</div>

			<div className='flex item-center justify-between mt-2'>
				<div className='flex items-center'>
					{!isPlaying ? (
						<IconButton show={true} onClick={() => handlePlayState()}>
							<img src={playIcon} className='ease-in-out duration-700' />
						</IconButton>
					) : (
						<IconButton show={true} onClick={() => handlePlayState()}>
							<img src={pauseIcon} className='ease-in-out duration-700' />
						</IconButton>
					)}

					<div className='videoPlayerActions-volume'>
						{isMuted ? (
							<IconButton
								show={true}
								style={{ marginLeft: '8px !important' }}
								onClick={() => handleVolumeBtnClick()}
								onMouseEnter={() => setVolumeHover(true)}
								onMouseLeave={() => setVolumeHover(false)}
							>
								<img src={volumeOffIcon} />
							</IconButton>
						) : (
							<IconButton
								show={true}
								style={{ marginLeft: '8px !important' }}
								onClick={() => handleVolumeBtnClick()}
								onMouseEnter={() => setVolumeHover(true)}
								onMouseLeave={() => setVolumeHover(false)}
							>
								<img src={volumeIcon} />
							</IconButton>
						)}
						{isHovered ? (
							<div
								className='transition ease-in-out delay-700'
								onMouseEnter={() => setVolumeHover(true)}
								onMouseLeave={() => setVolumeHover(false)}
							>
								<div className='videoPlayerActions-knob-container p-3 transition ease-in-out delay-250'>
									<div
										className='videoPlayerActions-knob rounded-full bg-neutral-400 transition ease-in-out delay-300'
										onClick={(e) => handleVolumeChange(e)}
									>
										<div
											className='videoPlayerActions-knob-inner rounded-full transition ease-in-out delay-350'
											style={{ width: `${volumeLevel}%`, position: 'absolute' }}
										/>
									</div>
								</div>
							</div>
						) : null}
					</div>
					{videoDuration ? (
						<span className='videoPlayerActions-time p-2 flex items-center'>
							<p className='text-xs text-white'>
								{formatVideoTime(currentTime)}
							</p>
							<p className='text-xs text-white mx-1'>/</p>
							<p className='text-xs text-white'>
								{formatVideoTime(videoDuration)}
							</p>
						</span>
					) : null}
				</div>
				<div>
					{!isFullScreen ? (
						<IconButton show={true} onClick={toggleFullscreen}>
							<img src={fullscreenIcon} />
						</IconButton>
					) : (
						<IconButton show={true} onClick={toggleFullscreen}>
							<img src={fullscreenExitIcon} />
						</IconButton>
					)}
				</div>
			</div>
		</div>
	);
}

export default VideoPlayerActions;
