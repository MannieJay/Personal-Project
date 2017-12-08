import { authenticate } from "../api/mockApi";

//import axios from 'axios';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_REDIRECT = "LOGIN_REDIRECT";

export function login_success(user) {
  console.log("login_success action creator fired...");
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export function login_error(err) {
  console.log("login_error action creator fired...");
  return {
    type: LOGIN_ERROR,
    err
  };
}

export function redirect(data) {
  console.log("redirect action creator fired..."); 
  return {
    type: LOGIN_REDIRECT,
    data
  };
}
export function login({ username, password }) {
  console.log({ username, password });
  console.log("login action creator fired...");
  return dispatch => {
    return authenticate(username, password)
      .then(user => {
        dispatch(login_success(user));
      })
      .then(data => {
        redirect(data);
      })
      .catch(err => {
        console.log("login .catch fired");
        dispatch(login_error(err));
      });
  };
}
