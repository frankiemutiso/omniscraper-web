import { combineReducers } from "redux";
import usersReducers from "./usersReducer";
import tagsReducer from "./tagsReducer";

export default combineReducers({
  users: usersReducers,
  tags: tagsReducer,
});
