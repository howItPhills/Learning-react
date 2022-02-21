import profileActionTypes from "./profile.types";

let initialState = {
   posts: [],
   friends: [],
   profileInfo: null,
   profileInfoCloud: null,
   status: '',
   isFetching: false
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case profileActionTypes.ADD_POST: {
         const newPost = {
            id: 5,
            message: action.payload,
            likesCount: 0,
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
         };
      }
      case profileActionTypes.SET_PROFILE:
      case profileActionTypes.SET_PROFILE_ClOUD:
      case profileActionTypes.SET_STATUS:
         return {
            ...state,
            ...action.payload
         };
      case profileActionTypes.SET_PHOTO:
         return {
            ...state,
            profileInfo: { ...state.profileInfo, photos: action.payload },
            profileInfoCloud: { ...state.profileInfoCloud, photos: action.payload }
         };
      default:
         return state;
   }
}