import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './root-reducer';

import { composeWithDevTools } from 'redux-devtools-extension';

import ThunkMiddleWare from 'redux-thunk';


let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ThunkMiddleWare)));

window.store = store;

export default store;