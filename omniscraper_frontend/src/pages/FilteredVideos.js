import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
const List = React.lazy(() => import('../components/List'));

export class FilteredVideos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: false,
			loading: false,
			videos: [],
			loadingTags: false,
			slug: this.props.match.params.slug,
			limit: 12,
			offset: 0,
			hasMore: true,
			videosLoadingError: false,
		};
	}

	componentDidMount() {
		this.loadVideos();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.slug !== this.props.match.params.slug) {
			this.setState(
				{ slug: this.props.match.params.slug, videos: [], offset: 0 },
				() => this.loadVideos()
			);
		}
	}

	loadVideos = () => {
		const { limit, offset } = this.state;
		const slug = this.props.match.params.slug;
		const url = `/api/tags/${slug}?limit=${limit}&offset=${offset}`;

		this.setState({ loading: true }, () => {
			axios
				.get(url)
				.then((res) => {
					const newVideos = res.data.videos;

					this.setState({
						loading: false,
						videos: [...this.state.videos, ...newVideos],
						offset: offset + limit,
						hasMore: res.data.has_more,
					});
				})
				.catch((err) => {
					this.setState({
						error: err.message,
						loading: false,
					});
				});
		});
	};

	convertSlugToString = (slug) => {
		const strParts = slug.split('-');

		const strPartsCapitalized = strParts.map((x) => {
			return x.charAt(0).toUpperCase() + x.slice(1);
		});

		return strPartsCapitalized.join(' ');
	};

	render() {
		const { loading, videos, hasMore, videosLoadingError } = this.state;
		const {
			classes,
			loggedIn,
			videoTags,
			loadTags,
			location,
			handleScrollPosition,
			match,
		} = this.props;
		const { convertSlugToString } = this;
		const pathParams = location.pathname.split('/');
		const clickedTag = pathParams[pathParams.length - 1];

		return (
			<>
				<Helmet>
					<meta
						name='description'
						content='The most efficient Twitter Videos and GIFs downloader. Log into Twitter, Find a tweet with a video and comment with @OMNISCRAPER, Click on the replied link, Download and share your video!'
					/>
					<meta
						name='keywords'
						content='Viral Tweets. Viral Videos. Funny Tweets. Funny Videos. Cat Videos. NFL. Rap. Sports. NFL players. Gaming. Barstool Sports. Joe Rogan. Actors. NBA players. MLB. Baseball. Bitcoin cryptocurrency. Tiktok Videos. Football Videos.'
					/>
					<meta name='twitter:card' content='summary' />
					<meta name='twitter:title' content='Smart content delivery' />
					<meta
						name='twitter:description'
						content='Log into Twitter, Find a tweet with a video and comment with @OMNISCRAPER, Click on the replied link, Download and share your video!'
					/>

					<meta name='twitter:site' content='@omniscraper' />
					<title>
						{convertSlugToString(match.params.slug)} - Omniscraper: The Best
						Twitter Videos Downloader!
					</title>
				</Helmet>
				<List
					loggedIn={loggedIn}
					videos={videos}
					videoTags={videoTags}
					loading={loading}
					hasMore={hasMore}
					error={videosLoadingError}
					loadVideos={this.loadVideos}
					loadTags={loadTags}
					clickedTag={clickedTag}
					scrollPosition={0}
					handleScrollPosition={handleScrollPosition}
				/>

				{/* {!hasMore && <div>No more videos</div>} */}
			</>
		);
	}
}

export default withRouter(FilteredVideos);
