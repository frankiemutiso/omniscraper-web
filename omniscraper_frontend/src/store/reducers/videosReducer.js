import {
	FLAG_VIDEO,
	FLAG_VIDEO_ERROR,
	FLAG_VIDEO_SUCCESS,
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
				videos: [...state.videos, ...action.videosData.videos],
				hasMoreVideos: action.videosData.hasMore,
			};

		case GET_VIDEOS_LIST_ERROR:
			return {
				...state,
				videosLoadingError: true,
				videosLoading: false,
			};

		default:
			return state;
	}
};

export default videosReducer;
