import { Redirect } from "react-router-dom";
import { dalAPI } from "../API/DalApi";

const SET_USERS_AUTH = 'auth/SET_USERS_AUTH';
const SET_ERROR_MESSAGE = 'auth/SET_ERROR_MESSAGE';
const SET_CAPTCH_URL = 'auth/SET_CAPTCH_URL';

let inintialState = {
   id: null,
   login: null,
   email: null,
   isAuthorized: false,
   errorMessage: '',
   captcha: null,
}

export const authReducer = (state = inintialState, action) => {
   switch (action.type) {
      case SET_USERS_AUTH:
      case SET_CAPTCH_URL:
      case SET_ERROR_MESSAGE:
         return {
            ...state,
            ...action.payload,
         }
      // case SET_ERROR_MESSAGE:
      //    return {
      //       ...state,
      //       errorMessage: action.errorMessage,
      //    }
      // case SET_CAPTCH_URL:
      //    return {
      //       ...state,
      //       errorMessage: action.errorMessage,
      //    }
      default:
         return state;
   }
}

export const setUsersAuth = (id, login, email, isAuthorized) => ({ type: SET_USERS_AUTH, payload: { id, login, email, isAuthorized } });
export const setErrorMessage = (errorMessage) => ({ type: SET_ERROR_MESSAGE, payload: { errorMessage } });
export const setCaptchaUrl = (captcha) => ({ type: SET_CAPTCH_URL, payload: { captcha } });

export const checkAuthData = () => async (dispatch) => {
   const data = await dalAPI.requestUsersData();
   const { id, login, email } = data.data;
   data.resultCode === 0 && dispatch(setUsersAuth(id, login, email, true))
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
   const data = await dalAPI.login(email, password, rememberMe, captcha);
   if (data.resultCode === 0) {
      dispatch(checkAuthData())
      dispatch(setErrorMessage(null))
      dispatch(setCaptchaUrl(null))
   } else {
      if (data.resultCode === 10) {
         dispatch(getCaptchaUrl())
      }
      dispatch(setErrorMessage(data.messages[0]))
   }
}

export const getCaptchaUrl = () => async (dispatch) => {
   const data = await dalAPI.getCaptchaUrl();
   dispatch(setCaptchaUrl(data.url))
}

export const logout = () => async (dispatch) => {
   const data = await dalAPI.logout();
   if (data.resultCode === 0) {
      dispatch(setUsersAuth(null, null, null, false))
      return <Redirect to='/login' />
   }
}