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
import { axiosInstance } from '../../utils/axiosInstance';

export const postFlagRequest = (payload) => async (dispatch) => {
	dispatch({ type: POST_FLAG_REQUEST });

	try {
		const res = axiosInstance.post('flag-requests/', payload);

		if (res.statusText === 'OK') {
			dispatch({ type: POST_FLAG_REQUEST_SUCCESS, payload: res.data });
		} else {
			dispatch({ type: POST_FLAG_REQUEST_ERROR });
		}
	} catch (error) {
		dispatch({ type: POST_FLAG_REQUEST_ERROR });
	}
};

export const getFlagRequests = (requestStatus) => async (dispatch) => {
	dispatch({ type: GET_FLAG_REQUEST });

	try {
		const res = await axiosInstance.get(
			`flag-requests/?request_status=${requestStatus}`
		);

		if (res.statusText === 'OK') {
			dispatch({
				type: GET_FLAG_REQUEST_SUCCESS,
				payload: res.data.flag_requests,
			});
		} else {
			dispatch({ type: GET_FLAG_REQUEST_ERROR });
		}
	} catch (error) {
		dispatch({ type: GET_FLAG_REQUEST_ERROR });
	}
};

export const getGroupedFlagRequests = (slug) => async (dispatch) => {
	dispatch({ type: GET_SLUG_FLAG_REQUESTS });

	try {
		const res = await axiosInstance.get(`flag-requests/?slug=${slug}`);

		if (res.statusText == 'OK') {
			dispatch({
				type: GET_SLUG_FLAG_REQUESTS_SUCCESS,
				payload: res.data.flag_requests,
			});
		} else {
			dispatch({ type: GET_SLUG_FLAG_REQUESTS_ERROR });
		}
	} catch (error) {
		dispatch({ type: GET_SLUG_FLAG_REQUESTS_ERROR });
	}
};

export const submitFlagRequestsApprovalStatus =
	(slug, requestStatus) => async (dispatch) => {
		dispatch({ type: SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS });

		try {
			const res = await axiosInstance.patch(`flag-requests/?slug=${slug}`, {
				request_status: requestStatus,
			});

			if (res.statusText == 'OK') {
				dispatch({ type: SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_SUCCESS });
			} else {
				dispatch({ type: SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_ERROR });
			}
		} catch (e) {
			dispatch({ type: SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_ERROR });
		}
	};
