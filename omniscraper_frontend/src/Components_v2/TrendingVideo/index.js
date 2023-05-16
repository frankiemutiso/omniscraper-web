import React, { useState } from 'react';
import './index.css';
import IconButton from '../IconButton';
import moreIcon from '../../assets/more.svg';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import shareIcon from '../../assets/share.svg';
import reportIcon from '../../assets/flag.svg';
import { shareVideo } from '../../utils/utilFunctions';

const HIDDEN = false;

function TrendingVideo({
	imageSource,
	text,
	elapsedTime,
	handleClick,
	videoSlug,
}) {
	const [canDisplayBtn, setBtnDisplayState] = useState(false);
	const [menuEvent, setMenuEvent] = useState(null);

	const handleBtnClick = (e) => {
		e.stopPropagation();
		setMenuEvent(e);
	};

	const hideButton = () => {
		setBtnDisplayState(false);
		setMenuEvent(null);
	};

	return (
		<div
			className='trendingVideo rounded-l-lg lg:grid lg:grid-cols-7 lg:gap-4 mb-2 lg:hover:bg-neutral-100 pr-2'
			onClick={() => handleClick()}
			onMouseLeave={() => hideButton()}
			onMouseEnter={() => setBtnDisplayState(true)}
		>
			<div className='col-span-3'>
				<img
					className='rounded-lg trendingVideo-img'
					src={imageSource}
					alt='Omniscraper Trending Twitter Video'
				/>
			</div>
			<div className='col-span-4 sm:pt-2'>
				{text && (
					<div className='trendingVideo-text-container mb-2'>
						<p className='text-sm font-semibold'>{text}</p>
					</div>
				)}
				<div className='trendingVideo-bottom flex justify-between items-center'>
					{elapsedTime ? (
						<p className='text-xs text-inherit'>{elapsedTime}</p>
					) : null}

					{canDisplayBtn ? (
						<span
							className='mt-1'
							onClick={(e) => handleBtnClick(e)}
							onBlur={() => setMenuEvent(null)}
						>
							<IconButton show={true}>
								<img src={moreIcon} />
							</IconButton>
						</span>
					) : null}
					{menuEvent && (
						<Menu event={menuEvent}>
							<MenuItem
								label='Share'
								icon={<img src={shareIcon} />}
								onClick={() => shareVideo(videoSlug)}
							/>
							{HIDDEN ? (
								<MenuItem label='Report' icon={<img src={flagIcon} />} />
							) : null}
						</Menu>
					)}
				</div>
			</div>
		</div>
	);
}

export default TrendingVideo;
