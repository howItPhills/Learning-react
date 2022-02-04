import { combineReducers } from 'redux';
import { profileReducer } from './profile/profile.reducer'
import { dialogsReducer } from './dialogsReducer'
import { findUsersReducer } from './findUsersReducer'
import { authReducer } from './authReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   findUsersPage: findUsersReducer,
   auth: authReducer,
   app: appReducer,
})