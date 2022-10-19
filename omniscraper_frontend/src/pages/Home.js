import React, { Component } from 'react';
import withStyles from '@mui/styles/withStyles';
import { Helmet } from 'react-helmet';

const List = React.lazy(() => import('../components/List'));

const styles = (theme) => ({
	root: {
		color: '#185adb',
		flex: 1,
		marginRight: theme.spacing(3),
		marginLeft: theme.spacing(3),
		paddingTop: 72,
	},
});

export class Home extends Component {
	render() {
		const {
			classes,
			loggedIn,
			videoTags,
			error,
			loading,
			hasMore,
			videos,
			loadTags,
			loadVideos,
		} = this.props;

		return (
			<React.Fragment>
				<Helmet>
					<meta charset='UTF-8' />
					<meta
						name='description'
						content='The most efficient Twitter Videos and GIFs downloader. Log into Twitter, Find a tweet with a video and comment with @OMNISCRAPER, Click on the replied link, Download and share your video!'
					/>
					<meta
						name='keywords'
						content='Viral Tweets. Viral Videos. Funny Tweets. Funny Videos. Cat Videos. NFL. Rap. Sports. NFL players. Gaming. Barstool Sports. Joe Rogan. Actors. NBA players. MLB. Baseball. Bitcoin cryptocurrency. Tiktok Videos. Football Videos.'
					/>
					<title>Home - Omniscraper: The Best Twitter Videos Downloader!</title>
				</Helmet>
				<List
					loggedIn={loggedIn}
					videoTags={videoTags}
					hasMore={hasMore}
					loadVideos={loadVideos}
					error={error}
					videos={videos}
					loading={loading}
					loadTags={loadTags}
					scrollPosition={this.props.scrollPosition}
					handleScrollPosition={this.props.handleScrollPosition}
				/>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Home);
