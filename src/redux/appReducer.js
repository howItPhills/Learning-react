import { checkAuth } from "./authReducer";

const SUCCESSFULL_INITIALIZATION = 'SUCCESSFULL_INITIALIZATION';

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

export const initializeApp = () => (dispatch) => {
   dispatch(checkAuth()).then(() => dispatch(successfulInit()))
}