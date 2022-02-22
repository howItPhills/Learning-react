import { createSelector } from "reselect"


const selectApp = state => state.app


export const selectIsInitialized = createSelector(
   [selectApp],
   app => app.isInitialized
)