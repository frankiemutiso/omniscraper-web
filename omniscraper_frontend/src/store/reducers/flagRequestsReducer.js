import {
	GET_FLAG_REQUEST,
	GET_FLAG_REQUEST_ERROR,
	GET_FLAG_REQUEST_SUCCESS,
	GET_SLUG_FLAG_REQUESTS,
	GET_SLUG_FLAG_REQUESTS_ERROR,
	GET_SLUG_FLAG_REQUESTS_SUCCESS,
	POST_FLAG_REQUEST,
	POST_FLAG_REQUEST_ERROR,
	POST_FLAG_REQUEST_SUCCESS,
	SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS,
	SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_ERROR,
	SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_SUCCESS,
} from '../actionTypes';

const initalState = {
	flagRequestsList: [],
	flagRequestsError: false,
	flagRequestsLoading: false,
	flagRequestLoading: false,
	flagRequestError: false,
	slugFlagRequests: [],
	slugFlagRequestsLoading: false,
	slugFlagRequestsError: false,
	submittingApprovalStatus: false,
	approvalStatusSubmissionError: false,
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

		case GET_SLUG_FLAG_REQUESTS:
			return {
				...state,
				slugFlagRequestsLoading: true,
				slugFlagRequestsError: false,
			};
		case GET_SLUG_FLAG_REQUESTS_SUCCESS:
			return {
				...state,
				slugFlagRequests: action.payload,
				slugFlagRequestsLoading: false,
			};
		case GET_SLUG_FLAG_REQUESTS_ERROR:
			return {
				...state,
				slugFlagRequestsError: true,
				slugFlagRequestsLoading: false,
			};
		case SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS:
			return {
				...state,
				submittingApprovalStatus: true,
				approvalStatusSubmissionError: false,
			};
		case SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_SUCCESS:
			return {
				...state,
				submittingApprovalStatus: false,
				approvalStatusSubmissionError: false,
			};
		case SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_ERROR:
			return {
				...state,
				submittingApprovalStatus: false,
				approvalStatusSubmissionError: true,
			};
		default:
			return state;
	}
};

export default flagRequestReducer;
