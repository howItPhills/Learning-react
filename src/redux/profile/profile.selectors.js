import { createSelector } from "reselect";

const selectProfile = state => state.profilePage


export const selectPosts = createSelector(
   [selectProfile],
   profilePage => profilePage.posts
)

export const selectFriends = createSelector(
   [selectProfile],
   profilePage => profilePage.friends
)

export const selectProfileInfo = createSelector(
   [selectProfile],
   profilePage => profilePage.profileInfo
)

export const selectProfileInfoCloud = createSelector(
   [selectProfile],
   profilePage => profilePage.profileInfoCloud
)

export const selectStatus = createSelector(
   [selectProfile],
   profilePage => profilePage.status
)