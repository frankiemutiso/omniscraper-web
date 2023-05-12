import React, { Component } from 'react';
import withStyles from '@mui/styles/withStyles';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import './Home.css';
import { getVideos } from '../../store/actions/videosActions';
import Videos from '../../Components_v2/Videos';

const List = React.lazy(() => import('../../components/List'));

const styles = (theme) => ({
	root: {
		color: '#185adb',
		flex: 1,
		marginRight: theme.spacing(3),
		marginLeft: theme.spacing(3),
		paddingTop: 72,
	},
});

const LIMIT = 12;

export class Home extends Component {
	state = {
		offset: 1,
	};

	componentDidMount = () => {
		const { location, updateHomeFirstLoad, isHomeFirstLoad } = this.props;
		const { scrollPosition } = this.state;

		window.gtag('event', 'page_view', {
			page_title: 'Home',
			page_path: location.pathname + location.search,
			page_location: window.location.href,
		});

		window.scrollTo(0, scrollPosition);

		if (isHomeFirstLoad) {
			updateHomeFirstLoad(false);
			this.loadVideos();
		}
	};

	loadVideos = async () => {
		const { offset } = this.state;

		await this.props.getVideos(offset, LIMIT);

		const { videosLoadingError, videosLoading } = this.props;

		if (!videosLoadingError && !videosLoading) {
			this.setState({ offset: offset + LIMIT });
		}
	};

	handleScrollPosition = () => {
		this.setState({
			autoplayVideo: true,
			scrollPosition: window.pageYOffset,
		});
	};

	render() {
		const { videosLoadingError, videosLoading, hasMoreVideos, videos } =
			this.props;
		const { loadVideos } = this;
		const { offset } = this.state;

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

				<Videos
					videos={videos}
					hasMoreVideos={hasMoreVideos}
					videosLoading={videosLoading}
					videosLoadingError={videosLoadingError}
					loadVideos={loadVideos}
					offset={offset}
				/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({ ...state.videos });
const mapDispatchToProps = { getVideos };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Home));
