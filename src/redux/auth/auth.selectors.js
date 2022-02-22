import { createSelector } from "reselect";

const selectAuth = state => state.auth

export const selectAuthorizedId = createSelector(
   [selectAuth],
   auth => auth.id
)

export const selectIsAuthorized = createSelector(
   [selectAuth],
   auth => auth.isAuthorized
)

export const selectCaptcha = createSelector(
   [selectAuth],
   auth => auth.captcha
)

export const selectErrorMessage = createSelector(
   [selectAuth],
   auth => auth.errorMessage
)

