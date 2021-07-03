import { createStore, combineReducers } from 'redux';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';

let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
})

let store = createStore(reducers);


window.store = store;

export default store;