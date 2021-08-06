import { dalAPI } from "../API/DalApi";

const SET_USERS_AUTH = 'SET_USERS_AUTH';
const SET_PROFILE_TO_NULL = 'SET_PROFILE_TO_NULL'

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
            ...action.data,
            isAuthorized: true,
         }
      case SET_PROFILE_TO_NULL:
         return {
            ...state,
            id: null,
            login: null,
            email: null,
            isAuthorized: false,
         }
      default:
         return state;
   }
}

export const setUsersAuth = (id, login, email) => ({ type: SET_USERS_AUTH, data: { id, login, email } });
export const setProfileToNull = () => ({ type: SET_PROFILE_TO_NULL });

export const checkAuth = () => (dispatch) =>
   dalAPI.checkAuth().then((data) => {
      if (data.resultCode === 0) {
         let { id, login, email } = data.data;
         dispatch(setUsersAuth(id, login, email))
      }
   });
export const login = (email, password, rememberMe) => (dispatch) =>
   dalAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
         dispatch(checkAuth())
      }
   });
export const logout = () => (dispatch) =>
   dalAPI.logout().then((data) => {
      if (data.resultCode === 0) {
         dispatch(setProfileToNull())
      }
   });