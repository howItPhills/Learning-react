import { dalAPI } from "../API/DalApi";
import { changeObjectInArray } from "../assets/functions/mapObject";

const SET_CURRENT_PAGE = "findeUsers/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "findeUsers/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "findeUsers/TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "findeUsers/FOLLOWING_IN_PROGRESS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let inintialState = {
   users: [],
   pageSize: 9,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followInProgress: [],
   portionSize: 10,
}

export const findUsersReducer = (state = inintialState, action) => {

   switch (action.type) {
      case 'FOLLOW': {
         return {
            ...state,
            users: changeObjectInArray(state.users, 'id', action.userId, { followed: true })
         }
      }
      case 'UNFOLLOW': {
         return {
            ...state,
            users: changeObjectInArray(state.users, 'id', action.userId, { followed: false })
         }
      }
      case 'SET_USERS': {
         return {
            ...state,
            users: [...action.users],
         }
      }
      case SET_CURRENT_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage
         }
      }
      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state,
            totalUsersCount: action.totalUsersCount,
         }
      }
      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching,
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
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
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