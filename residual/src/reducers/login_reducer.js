// src/reducers/login_reducer.js
import * as types from "../actions/loginActions";
import initialState from "./initialState";

export default function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case types.LOGIN_ERROR:
      return Object.assign({}, state, { username: "" });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, { username: action.user.username });
    default:
      return state;
  }
}
