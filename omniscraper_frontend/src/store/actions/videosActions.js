import axios from 'axios';
import JSONbig from 'json-bigint';
import { axiosInstance } from '../../utils/axiosInstance';
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

export const getVideo = (slug) => async (dispatch) => {
	dispatch({ type: GET_VIDEO });

	try {
		const url = `/api/${slug}`;

		const res = await axios.get(url, {
			transformResponse: (data) => JSONbig.parse(data),
		});

		if (res.statusText === 'OK') {
			dispatch({ type: GET_VIDEO_SUCCESS, payload: res.data });
		} else {
			dispatch({ type: GET_VIDEO_ERROR });
		}
	} catch (error) {
		console.log('Error: ', error);
		dispatch({ type: GET_VIDEO_ERROR, payload: error.message });
	}
};

export const flagVideo = (slug, flagged) => async (dispatch) => {
	dispatch({ type: FLAG_VIDEO });

	try {
		const url = `${slug}`;

		const res = await axiosInstance.patch(url, { flagged: flagged });

		if ((res.statusText = 'OK')) {
			dispatch({ type: FLAG_VIDEO_SUCCESS });
		} else {
			dispatch({ type: FLAG_VIDEO_ERROR });
		}
	} catch (error) {
		dispatch({ type: FLAG_VIDEO_ERROR });
	}
};

export const getVideos = (offset, limit) => async (dispatch) => {
	dispatch({ type: GET_VIDEOS_LIST });

	try {
		const url = `/api/videos/?limit=${limit}&offset=${offset}`;

		const res = await axios.get(url);

		if (res.statusText === 'OK') {
			dispatch({ type: GET_VIDEOS_LIST_SUCCESS, videosData: res.data });
		} else {
			dispatch({ type: GET_VIDEOS_LIST_ERROR });
		}
	} catch (error) {
		dispatch({ type: GET_VIDEOS_LIST_ERROR });
	}
};

export const getTaggedVideos = (tag) => async (dispatch) => {};
