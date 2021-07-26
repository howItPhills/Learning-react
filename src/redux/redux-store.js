import { createStore, combineReducers } from 'redux';
import { dialogsReducer } from './dialogsReducer';
import { findUsersReducer } from './findUsersReducer';
import { profileReducer } from './profileReducer';

let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   findUsersPage: findUsersReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;