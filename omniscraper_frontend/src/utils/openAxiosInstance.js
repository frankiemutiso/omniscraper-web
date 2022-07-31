import axios from 'axios';

const baseURL = '/api/';

export const openAxiosInstance = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});
