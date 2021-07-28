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
            ...action.data,
            isAuthorized: true,
         }
      default:
         return state;
   }
}

export const setUsersAuth = (id, login, email) => ({ type: SET_USERS_AUTH, data: { id, login, email } });

export const checkAuthThunkCreator = () => (dispatch) =>
   dalAPI.checkAuth().then((data) => {
      if (data.resultCode === 0) {
         let { id, login, email } = data.data;
         dispatch(setUsersAuth(id, login, email))
      }
   });