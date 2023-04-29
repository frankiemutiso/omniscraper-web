import React, { Fragment, useEffect } from 'react';
import { calculateTimeSinceSave } from '../../utils/calculateTimeLapse';
import VideoCard from '../VideoCard/VideoCard';
import './Videos.css';
import Placeholder from '../../components/reusableComponents/Placeholder';
import VideoCardPlaceholder from '../VideoCard/VideoCardPlaceholder';

function Videos({
	videos,
	hasMoreVideos,
	videosLoading,
	videosLoadingError,
	loadVideos,
	offset,
}) {
	useEffect(() => {
		window.addEventListener('scroll', handleInfiniteScroll);
	}, []);

	const handleInfiniteScroll = () => {
		const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

		if (videosLoadingError || videosLoading || !hasMoreVideos) return;

		const checkHeight = scrollTop >= scrollHeight - clientHeight - 200;
		debugger;
		if (checkHeight) {
			loadVideos();
		}
	};

	return (
		<div
			className='videos-grid flex fle-wrap grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4'
			onScroll={() => handleInfiniteScroll()}
		>
			{videosLoading && offset === 1 ? (
				<Fragment>
					{Array.from(new Array(12)).map((item, index) => (
						<VideoCardPlaceholder />
					))}
				</Fragment>
			) : (
				<Fragment>
					{videos.map((x) => {
						const elapsedTime = calculateTimeSinceSave(x);

						return (
							<VideoCard
								key={x.id}
								imageSource={x.video_thumbnail_link_https}
								text={x.text}
								elapsedTime={elapsedTime}
							/>
						);
					})}
				</Fragment>
			)}
		</div>
	);
}

export default Videos;
