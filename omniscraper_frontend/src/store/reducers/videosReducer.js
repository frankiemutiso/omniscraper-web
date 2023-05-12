import {
	DOWNLOAD_VIDEO,
	DOWNLOAD_VIDEO_ERROR,
	DOWNLOAD_VIDEO_PROGRESS,
	DOWNLOAD_VIDEO_SUCCESS,
	FLAG_VIDEO,
	FLAG_VIDEO_ERROR,
	FLAG_VIDEO_SUCCESS,
	GET_TRENDING_VIDEOS,
	GET_TRENDING_VIDEOS_ERROR,
	GET_TRENDING_VIDEOS_SUCCESS,
	GET_VIDEO,
	GET_VIDEOS_LIST,
	GET_VIDEOS_LIST_ERROR,
	GET_VIDEOS_LIST_SUCCESS,
	GET_VIDEO_ERROR,
	GET_VIDEO_SUCCESS,
} from '../actionTypes';

const initalState = {
	videoLoading: false,
	videoError: false,
	videoObject: null,
	flaggingVideo: false,
	flaggingError: false,

	videosLoading: false,
	videos: [],
	videosLoadingError: false,
	hasMoreVideos: true,

	trendingVideos: [],
	trendingVideosLoadingError: false,
	trendingVideosLoading: false,

	downloadingVideo: false,
	videoDownloadingError: false,
	downloadingVideoProgress: 0,
};

const videosReducer = (state = initalState, action) => {
	switch (action.type) {
		case GET_VIDEO:
			return {
				...state,
				videoLoading: true,
				videoError: false,
			};
		case GET_VIDEO_SUCCESS:
			return {
				...state,
				videoLoading: false,
				videoError: false,
				videoObject: action.payload,
			};

		case GET_VIDEO_ERROR:
			return {
				...state,
				videoLoading: false,
				videoError: true,
			};

		case FLAG_VIDEO:
			return {
				...state,
				flaggingVideo: true,
				flaggingError: false,
			};

		case FLAG_VIDEO_SUCCESS:
			return {
				...state,
				flaggingVideo: false,
				flaggingError: false,
			};

		case FLAG_VIDEO_ERROR:
			return {
				...state,
				flaggingVideo: false,
				flaggingError: true,
			};

		case GET_VIDEOS_LIST:
			return {
				...state,
				videosLoading: true,
				videosLoadingError: false,
			};

		case GET_VIDEOS_LIST_SUCCESS:
			return {
				...state,
				videosLoading: false,
				videos: state.videos.concat(action.videosData.videos),
				hasMoreVideos: action.videosData.hasMore,
			};

		case GET_VIDEOS_LIST_ERROR:
			return {
				...state,
				videosLoadingError: true,
				videosLoading: false,
			};

		case GET_TRENDING_VIDEOS:
			return {
				...state,
				trendingVideosLoading: true,
				trendingVideosLoadingError: false,
			};

		case GET_TRENDING_VIDEOS_SUCCESS:
			return {
				...state,
				trendingVideosLoading: false,
				trendingVideos: action.trendingVideos,
			};

		case GET_TRENDING_VIDEOS_ERROR:
			return {
				...state,
				trendingVideosLoadingError: true,
				trendingVideosLoading: false,
			};

		case DOWNLOAD_VIDEO:
			return {
				...state,
				downloadingVideo: true,
				videoDownloadingError: false,
			};
		case DOWNLOAD_VIDEO_PROGRESS:
			return {
				...state,
				downloadingVideo: true,
				videoDownloadingError: false,
				downloadingVideoProgress: action.downloadProgress,
			};
		case DOWNLOAD_VIDEO_SUCCESS:
			return {
				...state,
				downloadingVideo: false,
				videoDownloadingError: false,
			};
		case DOWNLOAD_VIDEO_ERROR:
			return {
				...state,
				downloadingVideo: false,
				videoDownloadingError: true,
			};

		default:
			return state;
	}
};

export default videosReducer;
