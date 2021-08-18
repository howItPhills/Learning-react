import { checkAuthData } from "./authReducer";

const SUCCESSFULL_INITIALIZATION = 'app/SUCCESSFULL_INITIALIZATION';

let inintialState = {
   isInitialized: false,
}

export const appReducer = (state = inintialState, action) => {
   switch (action.type) {
      case SUCCESSFULL_INITIALIZATION:
         return {
            ...state,
            isInitialized: true
         }
      default:
         return state;
   }
}

export const successfulInit = () => ({ type: SUCCESSFULL_INITIALIZATION });

export const initializeApp = () => async (dispatch) => {
   await dispatch(checkAuthData());
   dispatch(successfulInit())
}