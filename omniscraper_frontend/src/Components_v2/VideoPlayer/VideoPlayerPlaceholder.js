import React from 'react';
import './index.css';

function VideoPlayerPlaceholder() {
	return (
		<div>
			<div className='videoPlayer lg:rounded-lg bg-neutral-200' />
			<div className='mt-6 videoPlayer-video-info'>
				{Array.from(new Array(2)).map((x) => (
					<div
						className='bg-neutral-200 mt-1 animate-pulse'
						style={{ height: 16, width: '100%' }}
					/>
				))}
				<div
					className='bg-neutral-200 mt-4 animate-pulse'
					style={{ height: 16, width: 100 }}
				/>
			</div>
		</div>
	);
}

export default VideoPlayerPlaceholder;
