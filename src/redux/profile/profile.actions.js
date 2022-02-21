import { dalAPI } from "../../API/DalApi";
import profileActionTypes from "./profile.types";


// ACTION_CREATORS
export const addPost = (post) => ({ type: profileActionTypes.ADD_POST, payload: post });
export const setProfile = (profileInfo) => ({ type: profileActionTypes.SET_PROFILE, payload: { profileInfo } });
export const setProfileCloud = (profileInfoCloud) => ({ type: profileActionTypes.SET_PROFILE_ClOUD, payload: { profileInfoCloud } });
export const setStatus = (status) => ({ type: profileActionTypes.SET_STATUS, payload: { status } });
export const setPhoto = (photos) => ({ type: profileActionTypes.SET_PHOTO, payload: photos });




//THUNKS
const getProfileBody = async (id, actionCreator, dispatch) => {
   const data = await dalAPI.getProfile(id)
   dispatch(actionCreator(data));
}

export const getProfile = (userId) => async (dispatch) => {
   getProfileBody(userId, setProfile, dispatch);
}
export const getProfileCloud = (authorizedId) => async (dispatch) => {
   getProfileBody(authorizedId, setProfileCloud, dispatch)
}

export const getStatus = (id) => async (dispatch) => {
   const data = await dalAPI.getStatus(id);
   dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
   const data = await dalAPI.updateStatus(status)
   if (data.resultCode === 0) {
      dispatch(setStatus(status))
   }
}

export const updatePhoto = (file) => async (dispatch) => {
   const data = await dalAPI.updatePhoto(file)
   dispatch(setPhoto(data.data.photos))
}
export const updateProfile = (info) => async (dispatch, getState) => {
   const userId = getState().auth.id
   const data = await dalAPI.updateProfile(info)
   if (data.resultCode === 0) {
      dispatch(getProfile(userId))
      dispatch(getProfileCloud(userId))
   }
}