import React, { Component } from 'react';
import withStyles from '@mui/styles/withStyles';

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
