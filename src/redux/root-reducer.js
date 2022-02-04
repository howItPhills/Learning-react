import { createStore, combineReducers, applyMiddleware } from 'redux';


export const rootReducer = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   findUsersPage: findUsersReducer,
   auth: authReducer,
   app: appReducer,
})