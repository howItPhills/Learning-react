import { dalAPI } from "../API/DalApi";
import { changeObjectInArray } from "../assets/functions/mapObject";

const SET_CURRENT_PAGE = "findeUsers/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "findeUsers/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "findeUsers/TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "findeUsers/FOLLOWING_IN_PROGRESS";
const FOLLOW = "findeUsers/FOLLOW";
const UNFOLLOW = "findeUsers/UNFOLLOW";
const SET_USERS = "findeUsers/SET_USERS";
const SET_CURRENT_PORTION = "findeUsers/SET_CURRENT_PORTION";

let inintialState = {
   users: [],
   pageSize: 9,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followInProgress: [],
   portionSize: 10,
   currentPortionNumber: 1,
}

export const findUsersReducer = (state = inintialState, action) => {

   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: changeObjectInArray(state.users, 'id', action.userId, { followed: true })
         }
      }
      case UNFOLLOW: {
         return {
            ...state,
            users: changeObjectInArray(state.users, 'id', action.userId, { followed: false })
         }
      }
      case SET_USERS:
      case SET_CURRENT_PAGE:
      case SET_TOTAL_USERS_COUNT:
      case SET_CURRENT_PORTION:
      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            ...action.payload
         }
      }
      case FOLLOWING_IN_PROGRESS: {
         return {
            ...state,
            followInProgress: action.isFetching ? [...state.followInProgress, action.id] : state.followInProgress.filter(id => id !== action.id),
         }
      }
      default:
         return state;
   }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, payload: { users } });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: { currentPage } });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, payload: { totalUsersCount } });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, payload: { isFetching } });
export const setCurrentPortionNumber = (currentPortionNumber) => ({ type: SET_CURRENT_PORTION, payload: { currentPortionNumber } });
export const checkFollowInProgress = (isFetching, id) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, id });


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
   dispatch(toggleIsFetching(true));
   const data = await dalAPI.getUsers(currentPage, pageSize);
   dispatch(toggleIsFetching(false));
   dispatch(setUsers(data.items));
   dispatch(setTotalUsersCount(data.totalCount));
}

export const onPageChanged = (pageNumber, pageSize) => async (dispatch) => {
   dispatch(toggleIsFetching(true));
   dispatch(setCurrentPage(pageNumber));
   const data = await dalAPI.getUsers(pageNumber, pageSize);
   dispatch(toggleIsFetching(false));
   dispatch(setUsers(data.items));
}


const followUnfollowFlow = async (dispatch, id, dalMethod, actionCreator) => {
   dispatch(checkFollowInProgress(true, id))
   const data = await dalMethod(id)
   if (data.resultCode === 0) {
      dispatch(actionCreator(id))
   }
   dispatch(checkFollowInProgress(false, id))
}

export const unfollowing = (id) => async (dispatch) => {
   followUnfollowFlow(dispatch, id, dalAPI.unfollowUser.bind(dalAPI), unfollow)
}

export const following = (id) => async (dispatch) => {
   followUnfollowFlow(dispatch, id, dalAPI.followUser.bind(dalAPI), follow)
}