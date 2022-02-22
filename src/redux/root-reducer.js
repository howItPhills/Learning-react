import { combineReducers } from 'redux';

import { profileReducer } from './profile/profile.reducer'
import { dialogsReducer } from './dialogsReducer'
import { findUsersReducer } from './findUsersPage/findUsersReducer'
import { authReducer } from './auth/authReducer'
import { appReducer } from './app/appReducer'

export const rootReducer = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   findUsersPage: findUsersReducer,
   auth: authReducer,
   app: appReducer,
})