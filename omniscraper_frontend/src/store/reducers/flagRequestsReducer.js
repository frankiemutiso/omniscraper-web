import {
	GET_FLAG_REQUEST,
	GET_FLAG_REQUEST_ERROR,
	GET_FLAG_REQUEST_SUCCESS,
	POST_FLAG_REQUEST,
	POST_FLAG_REQUEST_ERROR,
	POST_FLAG_REQUEST_SUCCESS,
} from '../actionTypes';

const initalState = {
	flagRequestsList: [],
	flagRequestsError: false,
	flagRequestsLoading: false,
	flagRequestLoading: false,
	flagRequestError: false,
};

const flagRequestReducer = (state = initalState, action) => {
	switch (action.type) {
		case GET_FLAG_REQUEST:
			return {
				...state,
				flagRequestsLoading: true,
				flagRequestsError: false,
			};
		case GET_FLAG_REQUEST_SUCCESS:
			return {
				...state,
				flagRequestsLoading: false,
				flagRequestsError: false,
				flagRequestsList: action.payload,
			};
		case GET_FLAG_REQUEST_ERROR:
			return {
				...state,
				flagRequestsLoading: false,
				flagRequestsError: true,
			};
		case POST_FLAG_REQUEST:
			return {
				...state,
				flagRequestLoading: true,
				flagRequestError: false,
			};
		case POST_FLAG_REQUEST_SUCCESS:
			return {
				...state,
				flagRequestLoading: false,
				flagRequestError: false,
			};
		case POST_FLAG_REQUEST_ERROR:
			return {
				...state,
				flagRequestLoading: false,
				flagRequestError: true,
			};
		default:
			return state;
	}
};

export default flagRequestReducer;
