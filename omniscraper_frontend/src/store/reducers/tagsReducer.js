import {
  REQUEST_TAGS,
  RECEIVE_TAGS_SUCCESS,
  RECEIVE_TAGS_ERROR,
} from "../actionTypes";

const initialState = {
  tagsLoading: false,
  videoTags: [],
  tagsLoadingError: false,
};

const tagsReducer = (state = initialState, action) => {
  if (action.type === REQUEST_TAGS) {
    return {
      ...state,
      tagsLoading: true,
    };
  }

  if (action.type === RECEIVE_TAGS_SUCCESS) {
    return {
      ...state,
      tagsLoading: false,
      videoTags: action.payload,
      tagsLoadingError: false,
    };
  }

  if (action.type === RECEIVE_TAGS_ERROR) {
    return {
      ...state,
      tagsLoading: false,
      tagsLoadingError: true,
    };
  }

  return state;
};

export default tagsReducer;
