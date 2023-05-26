import React, { useEffect, useState } from 'react';
import './VideoCard.css';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import shareIcon from '../../assets/share.svg';
import flagIcon from '../../assets/flag.svg';
import moreIcon from '../../assets/more.svg';
import { useHistory } from 'react-router-dom';
import { getStrippedVideoText, shareVideo } from '../../utils/utilFunctions';

const HIDDEN = true;

function VideoCard({
	imageSource,
	text,
	elapsedTime,
	videoSlug,
	handleScrollPosition,
}) {
	const [isBtnOnDisplay, setBtnOnDisplay] = useState(false);
	const [target, setMenuTarget] = useState(null);

	const history = useHistory();

	const strippedText = getStrippedVideoText(text);

	const handleMouseLeave = () => {
		setBtnOnDisplay(false);
		setMenuTarget(null);
	};

	const handleClick = (videoSlug) => {
		handleScrollPosition();
		history.push(`/${videoSlug}`);
	};

	return (
		<div
			className='videoCard px-2 pt-2 focus:ring-1 focus:ring-neutral-500'
			onMouseLeave={() => handleMouseLeave()}
			onMouseEnter={() => setBtnOnDisplay(true)}
			onClick={() => handleClick(videoSlug)}
		>
			<img
				className='rounded-lg bg-neutral-200'
				src={imageSource}
				alt='Omniscraper Twitter Video'
				style={{ height: 190, objectFit: 'cover', width: '100%' }}
			/>
			<div className='videoCard-actions mt-2'>
				{strippedText && strippedText.length > 0 && (
					<div className='videoCard-text-container'>
						<p className='text-sm font-semibold'>{strippedText}</p>
					</div>
				)}
				<div className='videoCard-bottom flex justify-between items-center'>
					<p className='videoCard-elapsed-time text-xs text-inherit'>
						{elapsedTime}
					</p>
					{target && (
						<Menu event={target}>
							<MenuItem
								label='Share'
								icon={<img src={shareIcon} />}
								onClick={() => shareVideo(videoSlug)}
							/>
							{!HIDDEN ? (
								<MenuItem label='Report' icon={<img src={flagIcon} />} />
							) : null}
						</Menu>
					)}
					<button
						className={`${
							isBtnOnDisplay
								? 'videoCard-btn-hover bg-neutral-200 rounded-full p-2 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-500'
								: 'videoCard-btn bg-neutral-200 rounded-full p-2 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-500'
						}`}
						onClick={(e) => {
							e.stopPropagation();
							setMenuTarget(e);
						}}
						onBlur={() => setMenuTarget(null)}
					>
						<img src={moreIcon} />
					</button>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
