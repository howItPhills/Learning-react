import { dalAPI } from "../API/DalApi";

const ADDPOST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SET_PHOTO = 'profile/SET_PHOTO';
const SET_PROFILE_ClOUD = 'profile/SET_PROFILE_ClOUD';

let initialState = {
   posts: [
      { id: '1', message: 'Hello', likesCount: '21' },
      { id: '2', message: 'Welcome', likesCount: '3' },
   ],
   friends: [
      { id: 1, src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hawtcelebs.com%2Fwp-content%2Fuploads%2F2018%2F03%2Fadelaide-kane-at-beautiful-people-show-at-paris-fashion-week-03-06-2018-2.jpg&f=1&nofb=1" },
      { id: 2, src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F05%2F13%2F334355-people-model-fashion-forest-dress-portrait.jpg&f=1&nofb=1" },
      { id: 3, src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.businessinsider.com%2Fimage%2F52a5eabc69bedd1379312cf4%2Fimage.jpg&f=1&nofb=1" },
   ],
   profileInfo: null,
   profileInfoCloud: null,
   status: '',
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADDPOST: {
         const newPost = {
            id: 5,
            message: action.post,
            likesCount: 2,
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
         };
      }
      case SET_PROFILE:
      case SET_PROFILE_ClOUD:
      case SET_STATUS:
         return {
            ...state,
            ...action.payload
         };
      case SET_PHOTO:
         return {
            ...state,
            profileInfo: { ...state.profileInfo, photos: action.photos },
            profileInfoCloud: { ...state.profileInfoCloud, photos: action.photos }
         };
      default:
         return state;
   }
}

export const addPost = (post) => ({ type: ADDPOST, post });
export const setProfile = (profileInfo) => ({ type: SET_PROFILE, payload: { profileInfo } });
export const setProfileCloud = (profileInfoCloud) => ({ type: SET_PROFILE_ClOUD, payload: { profileInfoCloud } });
export const setStatus = (status) => ({ type: SET_STATUS, payload: { status } });
export const setPhoto = (photos) => ({ type: SET_PHOTO, photos });


const getProfileBody = async (id, actionCreator, dispatch) => {
   const data = await dalAPI.getProfile(id)
   dispatch(actionCreator(data));
}

export const getProfile = (userId) => async (dispatch) => {
   getProfileBody(userId, setProfile, dispatch)
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
