import React, { Component, Fragment } from 'react';
import './index.css';
import VideoPlayer from '../../Components_v2/VideoPlayer';
import { connect } from 'react-redux';
import { downloadVideo, getVideo } from '../../store/actions/videosActions';
import { withRouter } from 'react-router';
import { calculateTimeSinceSave } from '../../utils/calculateTimeLapse';
import VideoPlayerPlaceholder from '../../Components_v2/VideoPlayer/VideoPlayerPlaceholder';
import TrendingVideos from '../../Components_v2/TrendingVideos';
import { Helmet } from 'react-helmet';

class Video extends Component {
	componentDidMount() {
		this.loadVideo();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.slug !== this.props.match.params.slug) {
			this.loadVideo();
		}
	}

	loadVideo = async () => {
		const { getVideo, match } = this.props;
		const { slug } = match.params;

		await getVideo(slug);
	};

	handleVideoDownload = async (videoObj) => {
		await this.props.downloadVideo({
			url: videoObj.url,
			slug: videoObj.slug,
		});
	};

	render() {
		const { videoObject, videoLoading, trendingVideos, trendingVideosLoading } =
			this.props;
		const { handleVideoDownload } = this;

		const elapsedTime = videoObject
			? calculateTimeSinceSave(videoObject)
			: null;

		return (
			<Fragment>
				<Helmet>
					<meta
						name='description'
						content='The most efficient Twitter Videos and GIFs downloader. Log into Twitter, Find a tweet with a video and comment with @OMNISCRAPER, Click on the replied link, Download and share your video!'
					/>
					<meta
						name='keywords'
						content='Viral Tweets. Viral Videos. Funny Tweets. Funny Videos. Cat Videos. NFL. Rap. Sports. NFL players. Gaming. Barstool Sports. Joe Rogan. Actors. NBA players. MLB. Baseball. Bitcoin cryptocurrency. Tiktok Videos. Football Videos.'
					/>
					<meta property='og:image:width' content='600' />
					<meta property='og:image:height' content='314' />
					<meta
						property='og:image'
						content={videoObject?.video_thumbnail_link_https}
					/>
					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:title' content={videoObject?.text} />
					<meta
						name='twitter:description'
						content='Log into Twitter, Find a tweet with a video and comment with @OMNISCRAPER, Click on the link, Download and share your video!'
					/>
					<meta
						name='twitter:image'
						content={videoObject?.video_thumbnail_link_https}
					/>
					<meta name='twitter:site' content='@omniscraper' />
					<title>
						Video - Omniscraper: The Best Twitter Videos Downloader!
					</title>
				</Helmet>
				<div className='lg:p-4 grid flex lg:grid-cols-6 md:grid-cols-1 lg:gap-6'>
					<div className='col-span-4 videoVideoPlayer-container'>
						{videoLoading ? (
							<VideoPlayerPlaceholder />
						) : (
							<Fragment>
								{videoObject ? (
									<VideoPlayer
										videoUrl={videoObject.url}
										videoText={videoObject.text}
										elapsedTime={elapsedTime}
										handleVideoDownload={() => handleVideoDownload(videoObject)}
										parentTweetId={videoObject.parent_tweet_id}
										videoSlug={videoObject.slug}
									/>
								) : null}
							</Fragment>
						)}
					</div>
					<div className='col-span-2'>
						<TrendingVideos
							trendingVideos={trendingVideos}
							trendingVideosLoading={trendingVideosLoading}
						/>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({ ...state.videos });
const mapDispatchToProps = { getVideo, downloadVideo };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Video));
