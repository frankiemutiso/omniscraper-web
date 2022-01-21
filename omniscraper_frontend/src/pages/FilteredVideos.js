import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
const ListComponent = React.lazy(() => import("../components/ListComponent"));

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

  render() {
    const { loading, videos, hasMore, videosLoadingError } = this.state;
    const {
      classes,
      loggedIn,
      videoTags,
      loadTags,
      location,
      handleScrollPosition,
    } = this.props;
    const pathParams = location.pathname.split("/");
    const clickedTag = pathParams[pathParams.length - 1];

    return (
      <>
        <ListComponent
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
