import { createSelector } from "reselect";

const getPostsSelector = (state) => state.profilePage.posts;
const getFriendsSelector = (state) => state.profilePage.friends;

export const getPosts = createSelector(getPostsSelector, (posts) => posts)
export const getFriends = createSelector(getFriendsSelector, (friends) => friends)