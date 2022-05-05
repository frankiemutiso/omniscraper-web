import axios from "axios";
import {
  REQUEST_TAGS,
  RECEIVE_TAGS_SUCCESS,
  RECEIVE_TAGS_ERROR,
} from "../actionTypes";

export const loadTags = () => async (dispatch) => {
  dispatch({ type: REQUEST_TAGS });

  try {
    const url = "/api/tags/";

    axios
      .get(url)
      .then((res) => {
        if (res.ok) {
          const newTags = res.data.tags;

          dispatch({ type: RECEIVE_TAGS_SUCCESS, payload: newTags });
        } else {
          dispatch({ type: RECEIVE_TAGS_ERROR });
        }
      })
      .catch((err) => {
        dispatch({ type: RECEIVE_TAGS_ERROR });
      });
  } catch (error) {
    dispatch({ type: RECEIVE_TAGS_ERROR });
  }
};
