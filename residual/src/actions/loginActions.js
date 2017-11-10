import { authenticate } from "../api/mockApi";

//import axios from 'axios';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export function login_success(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export function login_error(err) {
  return {
    type: LOGIN_ERROR,
    err
  };
}

export function login({ username, password }) {
  return dispatch => {
    return authenticate(username, password)
      .then(user => {
        dispatch(login_success(user));
      })
      .catch(err => {
        dispatch(login_error(err));
      });
  };
}
