import React from 'react';
import ViewIcon from '@mui/icons-material/PlayArrow';
import './MediaCard.css';
import BrokenImage from '../../assets/broken-image.png';
// Media Card Types: image, video

const MediaCard = React.forwardRef((props, ref) => {
	const {
		type,
		alt,
		src,
		autoPlay,
		height,
		text,
		lapse,
		handleClick,
		buttons,
		view,
		device,
		play,
		displayBottomActions,
		playIconSize,
		desktopTrending,
		...restProps
	} = props;

	const handleImageError = (evt) => {
		evt.target.src = `${BrokenImage}`;
	};

	return (
		<div {...restProps} className='media-card'>
			<div style={{ position: 'relative' }}>
				{type === 'video' ? (
					<video
						ref={ref && ref}
						autoPlay={autoPlay}
						disablePictureInPicture
						controlsList='nodownload'
						// height={height}
						className={
							desktopTrending
								? 'media-card__desktop__trending'
								: 'media-card__video'
						}
						onContextMenu={(e) => e.preventDefault()}
						onClick={handleClick}
						style={{
							height: height,
							objectFit: view !== 'detail' ? 'cover' : 'contain',
							border: 'none',
						}}
					>
						<source src={src} type='video/mp4' />
					</video>
				) : (
					<img
						ref={ref && ref}
						crossOrigin='anonymous'
						src={src}
						alt={src}
						// height={height}
						loading='lazy'
						className={
							desktopTrending
								? 'media-card__desktop__trending'
								: 'media-card__image'
						}
						onError={handleImageError}
						onContextMenu={(e) => e.preventDefault()}
						onClick={handleClick}
						style={{
							height: height,
							objectFit: device !== 'mobile' ? 'cover' : 'contain',
							border: 'none',
						}}
					/>
				)}
				{!play && (
					<ViewIcon
						style={{
							color: 'white',
							fontSize: playIconSize,
							opacity: 0.8,
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							cursor: 'pointer',
							borderRadius: 5,
						}}
						onClick={handleClick}
						size='large'
					/>
				)}
			</div>

			{displayBottomActions && (
				<div
					className={
						device === 'mobile' && view === 'detail'
							? 'media-card__actions__mobile__detail'
							: 'media-card__actions'
					}
				>
					{text && (
						<div className='media-card__actions__text-container'>
							{text?.length > 0 && (
								<p className='media-card__actions__text'>{text}</p>
							)}
						</div>
					)}

					<div className='media-card__actions__bottom'>
						<p
							className='media-card__actions__text'
							style={{
								marginLeft: 8,
							}}
						>
							{lapse}
						</p>
						<div className='media-card__actions__buttons'>
							{buttons && <>{buttons}</>}
						</div>
					</div>
				</div>
			)}
		</div>
	);
});

export default MediaCard;
