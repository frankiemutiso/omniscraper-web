import axios from 'axios';
import JSONbig from 'json-bigint';
import { axiosInstance } from '../../utils/axiosInstance';
import {
	DOWNLOAD_VIDEO,
	DOWNLOAD_VIDEO_ERROR,
	DOWNLOAD_VIDEO_PROGRESS,
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

export const getTrendingVideos = () => async (dispatch) => {
	dispatch({ type: GET_TRENDING_VIDEOS });

	try {
		const url = '/api/trending/';
		const res = await axios.get(url);

		if (res.statusText === 'OK') {
			const trendingVideos = res.data.trending_videos;

			dispatch({ type: GET_TRENDING_VIDEOS_SUCCESS, trendingVideos });
		} else {
			dispatch({ type: GET_TRENDING_VIDEOS_ERROR });
		}
	} catch (error) {
		dispatch({ type: GET_TRENDING_VIDEOS_ERROR });
	}
};

export const downloadVideo = (videoObj) => async (dispatch) => {
	dispatch({ type: DOWNLOAD_VIDEO });

	try {
		const { url, slug } = videoObj;
		const res = await axios({
			url,
			method: 'GET',
			responseType: 'blob',
			onDownloadProgress: (progressEvent) => {
				let downloadProgress = Math.round(
					(progressEvent.loaded * 100) / progressEvent.total
				);

				dispatch({ type: DOWNLOAD_VIDEO_PROGRESS, downloadProgress });
			},
		});

		if (res.statusText === 'OK') {
			const objectUrl = window.URL.createObjectURL(
				new Blob([res.data], {
					type: 'video/mp4',
				})
			);
			const link = document.createElement('a');
			link.href = objectUrl;
			link.download = `${slug}.mp4`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			window.URL.revokeObjectURL(objectUrl);
		} else {
			dispatch({ type: DOWNLOAD_VIDEO_ERROR });
		}
	} catch (error) {
		dispatch({ type: DOWNLOAD_VIDEO_ERROR });
	}
};
