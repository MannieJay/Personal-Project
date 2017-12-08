import * as types from "../actions/loginActions";
import initialState from "./initialState";
import { push } from 'react-router-redux';


export default function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case types.LOGIN_ERROR:
      return Object.assign({}, state, { username: "" });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, { username: action.user.username });
    case types.LOGIN_REDIRECT:
      return dispatch => {
      dispatch(push('/welcome'));
    };

    default:
      return state;
  }
}
