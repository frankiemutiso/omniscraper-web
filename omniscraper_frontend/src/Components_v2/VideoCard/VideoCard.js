import React, { useEffect, useState } from 'react';
import './VideoCard.css';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem/MenuItem';

function VideoCard({ imageSource, text, elapsedTime }) {
	const [isBtnOnDisplay, setBtnOnDisplay] = useState(false);
	const [target, setMenuTarget] = useState(null);

	const indexOfHttps = text !== null && text.indexOf('https');
	const strippedText = text !== null && text.slice(0, indexOfHttps).trim();

	const handleMouseLeave = () => {
		setBtnOnDisplay(false);
		setMenuTarget(null);
	};

	return (
		<div
			className='videoCard p-2'
			onMouseLeave={() => handleMouseLeave()}
			onMouseEnter={() => setBtnOnDisplay(true)}
		>
			<img
				className='rounded-lg'
				src={imageSource}
				alt='Omniscraper Twitter Video'
				style={{ height: 190, objectFit: 'cover', width: '100%' }}
			/>
			<div className='videoCard-actions mt-2'>
				{strippedText && strippedText.length > 0 && (
					<div className='videoCard-text-container'>
						<p className='text-sm text-black'>{strippedText}</p>
					</div>
				)}
				<div className='videoCard-bottom flex justify-between items-center'>
					<p className='videoCard-elapsed-time text-sm text-inherit'>
						{elapsedTime}
					</p>
					<Menu event={target}>
						<MenuItem label='Share' />
						<MenuItem label='Report' />
						<MenuItem label='Tag Video' />
					</Menu>
					<button
						onBlur={() => setMenuTarget(null)}
						className={`${
							isBtnOnDisplay
								? 'videoCard-btn-hover bg-neutral-200 rounded-full p-2 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-500'
								: 'videoCard-btn bg-neutral-200 rounded-full p-2 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-500'
						}`}
						onClick={(e) => setMenuTarget(e)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='20'
							viewBox='0 96 960 960'
							width='20'
						>
							<path d='M480.281 915.218q-22.542 0-38.52-15.968-15.979-15.968-15.979-38.391 0-21.893 15.927-38.267 15.927-16.374 38.293-16.374 22.824 0 38.52 16.445 15.696 16.445 15.696 38.522 0 22.077-15.698 38.055-15.697 15.978-38.239 15.978Zm0-285q-22.542 0-38.52-15.927-15.979-15.927-15.979-38.293 0-22.824 15.927-38.52 15.927-15.696 38.293-15.696 22.824 0 38.52 15.698 15.696 15.697 15.696 38.239 0 22.542-15.698 38.52-15.697 15.979-38.239 15.979Zm0-284.436q-22.542 0-38.52-16.14-15.979-16.14-15.979-38.804 0-22.665 15.927-38.643 15.927-15.979 38.293-15.979 22.824 0 38.52 16.12 15.696 16.12 15.696 38.785 0 22.665-15.698 38.663-15.697 15.998-38.239 15.998Z' />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
