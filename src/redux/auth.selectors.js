import { createSelector } from "reselect"

const selectAuth = state => state.auth

export const selectAuthorizedId = createSelector(
   [selectAuth],
   auth => auth.id
)