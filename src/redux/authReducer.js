import { Redirect } from "react-router-dom";
import { dalAPI } from "../API/DalApi";

const SET_USERS_AUTH = 'SET_USERS_AUTH';

let inintialState = {
   id: null,
   login: null,
   email: null,
   isAuthorized: false,
}

export const authReducer = (state = inintialState, action) => {
   switch (action.type) {
      case SET_USERS_AUTH:
         return {
            ...state,
            ...action.payload,
         }
      default:
         return state;
   }
}

export const setUsersAuth = (id, login, email, isAuthorized) => ({ type: SET_USERS_AUTH, payload: { id, login, email, isAuthorized } });

export const checkAuthData = () => (dispatch) => {
   return dalAPI.requestUsersData().then((data) => {
      if (data.resultCode === 0) {
         let { id, login, email } = data.data;
         dispatch(setUsersAuth(id, login, email, true))
      }
   });
}

export const login = (email, password, rememberMe) => (dispatch) =>
   dalAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
         dispatch(checkAuthData())
      }
   });
export const logout = () => (dispatch) =>
   dalAPI.logout().then((data) => {
      if (data.resultCode === 0) {
         dispatch(setUsersAuth(null, null, null, false))
         return <Redirect to='/login' />
      }
   });