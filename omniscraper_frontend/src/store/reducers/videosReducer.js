import {
	FLAG_VIDEO,
	FLAG_VIDEO_ERROR,
	FLAG_VIDEO_SUCCESS,
	GET_VIDEO,
	GET_VIDEO_ERROR,
	GET_VIDEO_SUCCESS,
} from '../actionTypes';

const initalState = {
	videoLoading: false,
	videoError: false,
	videoObject: null,
	flaggingVideo: false,
	flaggingError: false,
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

		default:
			return state;
	}
};

export default videosReducer;
