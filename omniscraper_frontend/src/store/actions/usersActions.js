import {
  REQUEST_LOGIN_USER,
  RECEIVE_LOGIN_USER_SUCCESS,
  RECEIVE_LOGIN_USER_ERROR,
  REQUEST_LOGOUT_USER,
  RECEIVE_LOGOUT_USER_SUCCESS,
  RECEIVE_LOGOUT_USER_ERROR,
} from "../actionTypes";
import { axiosInstance } from "../../utils/axiosInstance";

export const loginUser = (username, password) => async (dispatch) => {
  dispatch({ type: REQUEST_LOGIN_USER });

  try {
    axiosInstance
      .post("token/obtain/", {
        username,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          axiosInstance.defaults.headers["Authorization"] =
            "JWT " + response.data.access;
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);

          dispatch({ type: RECEIVE_LOGIN_USER_SUCCESS });
        } else {
          dispatch({
            type: RECEIVE_LOGIN_USER_ERROR,
            payload: response.statusText,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: RECEIVE_LOGIN_USER_ERROR, payload: error.message });
      });
  } catch (e) {
    dispatch({ type: RECEIVE_LOGIN_USER_ERROR, payload: error.message });
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: REQUEST_LOGOUT_USER });
  try {
    axiosInstance
      .post("blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      })
      .then((response) => {
        if (response.status === 205) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          axiosInstance.defaults.headers["Authorization"] = null;

          dispatch({ type: RECEIVE_LOGOUT_USER_SUCCESS });
        }
      })
      .catch((e) => {
        dispatch({ type: RECEIVE_LOGOUT_USER_ERROR });
      });
  } catch (e) {
    dispatch({ type: RECEIVE_LOGOUT_USER_ERROR });
  }
};
