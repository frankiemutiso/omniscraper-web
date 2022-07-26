import { combineReducers } from 'redux';
import flagRequestReducer from './flagRequestsReducer';

export default combineReducers({
	flagRequests: flagRequestReducer,
});
