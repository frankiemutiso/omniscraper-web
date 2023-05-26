import React, { Fragment } from 'react';
import './VideoCard.css';

function VideoCardPlaceholder() {
	return (
		<div className='videoCard px-2 pt-2 w-full'>
			<div
				className='bg-neutral-200 rounded-lg animate-pulse mb-2'
				style={{ height: 190 }}
			/>
			<div className='w-full videoCard-actions mt-2'>
				{Array.from(new Array(2)).map((x) => (
					<div
						className='bg-neutral-200 mt-1 animate-pulse w-full'
						style={{ height: 12 }}
					/>
				))}
				<div
					className='bg-neutral-200 mt-4 animate-pulse'
					style={{ height: 12, width: 100 }}
				/>
			</div>
		</div>
	);
}

export default VideoCardPlaceholder;
