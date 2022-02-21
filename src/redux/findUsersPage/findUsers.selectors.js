import { createSelector } from "reselect";

const selectFindUsersPage = (state) => state.findUsersPage

export const selectUsers = createSelector(
   [selectFindUsersPage],
   findUsersPage => findUsersPage.users
);

export const selectPageSize = createSelector(
   [selectFindUsersPage],
   findUsersPage => findUsersPage.pageSize
);

export const selectTotalUsersCount = createSelector(
   [selectFindUsersPage],
   findUsersPage => findUsersPage.totalUsersCount
);

export const selectIsFetching = createSelector(
   [selectFindUsersPage],
   findUsersPage => findUsersPage.isFetching
);

export const selectFollowInProgress = createSelector(
   [selectFindUsersPage],
   findUsersPage => findUsersPage.followInProgress
);

export const selectPortionSize = createSelector(
   [selectFindUsersPage],
   findUsersPage => findUsersPage.portionSize
);

export const selectCurrentPortionNumber = createSelector(
   [selectFindUsersPage],
   findUsersPage => findUsersPage.currentPortionNumber
);