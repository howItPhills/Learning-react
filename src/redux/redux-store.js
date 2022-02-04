import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from './authReducer';
import { dialogsReducer } from './dialogsReducer';
import { findUsersReducer } from './findUsersReducer';
import { profileReducer } from './profile/profileReducer';
import ThunkMiddleWare from 'redux-thunk';
import { appReducer } from './appReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './root-reducer';


let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ThunkMiddleWare)));

window.store = store;

export default store;