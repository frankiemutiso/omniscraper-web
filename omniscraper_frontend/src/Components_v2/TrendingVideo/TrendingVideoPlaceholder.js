import React from 'react';

function TrendingVideoPlaceholder() {
	return (
		<div className='trendingVideo rounded-l-lg lg:grid lg:grid-cols-7 lg:gap-4 mb-2 lg:hover:bg-neutral-100 pr-2'>
			<div className='col-span-3'>
				<div
					className='rounded-lg bg-neutral-200 animate-pulse trendingVideo-img'
					alt='Omniscraper Trending Twitter Video'
					style={{ height: 100, width: '100%' }}
				/>
			</div>
			<div className='col-span-4'>
				{Array.from(new Array(2)).map((x) => (
					<div
						className='bg-neutral-200 mt-1 animate-pulse trendingVideo-text-container'
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

export default TrendingVideoPlaceholder;
