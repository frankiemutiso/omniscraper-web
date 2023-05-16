import React, { Fragment } from 'react';
import './index.css';
import TrendingVideo from '../TrendingVideo';
import { calculateTimeSinceSave } from '../../utils/calculateTimeLapse';
import TrendingVideoPlaceholder from '../TrendingVideo/TrendingVideoPlaceholder';
import { getStrippedVideoText } from '../../utils/utilFunctions';
import { useHistory } from 'react-router';

function TrendingVideos({ trendingVideos, trendingVideosLoading }) {
	const history = useHistory();

	const handleVideoClick = (videoSlug) => {
		history.push(`/${videoSlug}`);
	};

	return (
		<div className='trendingVideos px-2 sm:px-4'>
			<p className='font-bold lg:text-lg mb-1 py-2'>Trending this week</p>
			<div className='trendingVideos-container lg:rounded-lg lg:pr-1'>
				{trendingVideosLoading ? (
					<Fragment>
						{Array.from(new Array(5)).map((item, index) => (
							<TrendingVideoPlaceholder key={index} />
						))}
					</Fragment>
				) : (
					<Fragment>
						{trendingVideos.map((trendingVideo) => {
							const elapsedTime = calculateTimeSinceSave(trendingVideo);
							const text = getStrippedVideoText(trendingVideo.text);

							return (
								<TrendingVideo
									key={trendingVideo.id}
									text={text}
									imageSource={trendingVideo.video_thumbnail_link_https}
									elapsedTime={elapsedTime}
									handleClick={() => handleVideoClick(trendingVideo.slug)}
									videoSlug={trendingVideo.slug}
								/>
							);
						})}
					</Fragment>
				)}
			</div>
		</div>
	);
}

export default TrendingVideos;
