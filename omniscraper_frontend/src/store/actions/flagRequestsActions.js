import {
	GET_FLAG_REQUEST,
	GET_FLAG_REQUEST_ERROR,
	GET_FLAG_REQUEST_SUCCESS,
	POST_FLAG_REQUEST,
	POST_FLAG_REQUEST_ERROR,
	POST_FLAG_REQUEST_SUCCESS,
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

export const getFlagRequests = () => async (dispatch) => {
	dispatch({ type: GET_FLAG_REQUEST });

	try {
		const res = await axiosInstance.get('flag-requests/');

		debugger;

		if (res.statusText === 'OK') {
			dispatch({ type: GET_FLAG_REQUEST_SUCCESS, payload: res.data });
		} else {
			dispatch({ type: GET_FLAG_REQUEST_ERROR });
		}
	} catch (error) {
		dispatch({ type: GET_FLAG_REQUEST_ERROR });
	}
};
