import { combineReducers } from 'redux';
import flagRequestReducer from './flagRequestsReducer';
import videosReducer from './videosReducer';

export default combineReducers({
	flagRequests: flagRequestReducer,
	videos: videosReducer,
});
