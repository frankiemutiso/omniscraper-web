import React, { Fragment, useEffect } from 'react';
import { calculateTimeSinceSave } from '../../utils/calculateTimeLapse';
import VideoCard from '../VideoCard';
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
	handleScrollPosition,
}) {
	return (
		<div className='videos-grid flex fle-wrap grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 gap-3 p-4'>
			{videosLoading && offset === 1 ? (
				<Fragment>
					{Array.from(new Array(12)).map((item, index) => (
						<VideoCardPlaceholder key={index} />
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
								videoSlug={x.slug}
								handleScrollPosition={handleScrollPosition}
							/>
						);
					})}
				</Fragment>
			)}

			{videosLoading && offset > 1 && (
				<Fragment>
					{Array.from(new Array(12)).map((item, index) => (
						<VideoCardPlaceholder key={index} />
					))}
				</Fragment>
			)}
		</div>
	);
}

export default Videos;
