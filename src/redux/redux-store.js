import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from './authReducer';
import { dialogsReducer } from './dialogsReducer';
import { findUsersReducer } from './findUsersReducer';
import { profileReducer } from './profileReducer';
import ThunkMiddleWare from 'redux-thunk';
import { appReducer } from './appReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   findUsersPage: findUsersReducer,
   auth: authReducer,
   app: appReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(ThunkMiddleWare)));

window.store = store;

export default store;