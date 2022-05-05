import {
  REQUEST_LOGIN_USER,
  RECEIVE_LOGIN_USER_SUCCESS,
  RECEIVE_LOGIN_USER_ERROR,
  REQUEST_LOGOUT_USER,
  RECEIVE_LOGOUT_USER_SUCCESS,
  RECEIVE_LOGOUT_USER_ERROR,
} from "../actionTypes";

const initialState = {
  loggedIn:
    typeof window !== "undefined"
      ? localStorage.getItem("access_token")
        ? true
        : false
      : null,
  loginError: false,
  loginLoading: false,
  logoutLoading: false,
  logoutError: false,
};

const usersReducer = (state = initialState, action) => {
  if (action.type === REQUEST_LOGIN_USER) {
    return {
      ...state,
      loginLoading: true,
      loginError: false,
      loggedIn: false,
    };
  }

  if (action.type === RECEIVE_LOGIN_USER_SUCCESS) {
    return {
      ...state,
      loginLoading: false,
      loginError: false,
      loggedIn: true,
    };
  }

  if (action.type === RECEIVE_LOGIN_USER_ERROR) {
    return {
      ...state,
      logInLoading: false,
      loginError: true,
      loggedIn: false,
    };
  }

  if (action.type === REQUEST_LOGOUT_USER) {
    return {
      ...state,
      logoutLoading: true,
      logoutError: false,
    };
  }

  if (action.type === RECEIVE_LOGOUT_USER_SUCCESS) {
    return {
      ...state,
      logoutLoading: false,
      logoutError: false,
      loggedIn: false,
    };
  }

  if (action.type === RECEIVE_LOGOUT_USER_ERROR) {
    return {
      ...state,
      logoutLoading: false,
      logoutError: true,
      loggedIn: true,
    };
  }

  return state;
};

export default usersReducer;
