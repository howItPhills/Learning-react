import { Redirect } from "react-router-dom";
import { dalAPI } from "../API/DalApi";

const SET_USERS_AUTH = 'auth/SET_USERS_AUTH';
const SET_ERROR_MESSAGE = 'auth/SET_ERROR_MESSAGE';

let inintialState = {
   id: null,
   login: null,
   email: null,
   isAuthorized: false,
   errorMessage: '',
}

export const authReducer = (state = inintialState, action) => {
   switch (action.type) {
      case SET_USERS_AUTH:
         return {
            ...state,
            ...action.payload,
         }
      case SET_ERROR_MESSAGE:
         return {
            ...state,
            errorMessage: action.errorMessage,
         }
      default:
         return state;
   }
}

export const setUsersAuth = (id, login, email, isAuthorized) => ({ type: SET_USERS_AUTH, payload: { id, login, email, isAuthorized } });
export const setErrorMessage = (errorMessage) => ({ type: SET_ERROR_MESSAGE, errorMessage });

export const checkAuthData = () => async (dispatch) => {
   const data = await dalAPI.requestUsersData();
   const { id, login, email } = data.data;
   data.resultCode === 0 && dispatch(setUsersAuth(id, login, email, true))
}

export const login = (email, password, rememberMe) => async (dispatch) => {
   const data = await dalAPI.login(email, password, rememberMe);
   (data.resultCode === 0 ? dispatch(checkAuthData()) : dispatch(setErrorMessage(data.messages[0])))
}
export const logout = () => async (dispatch) => {
   const data = await dalAPI.logout();
   if (data.resultCode === 0) {
      dispatch(setUsersAuth(null, null, null, false))
      return <Redirect to='/login' />
   }
}