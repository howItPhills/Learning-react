const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
// const INCREASE_NEW_PAGE = "INCREASE_NEW_PAGE";
// const ADD_MORE_USERS = "ADD_MORE_USERS";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let inintialState = {
   users: [],
   pageSize: 4,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   newPage: 2,
   followInProgress: [],
}

export const findUsersReducer = (state = inintialState, action) => {
   switch (action.type) {
      case 'FOLLOW': {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }
      }
      case 'UNFOLLOW': {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
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
      // case INCREASE_NEW_PAGE: {
      //    return {
      //       ...state,
      //       newPage: ++state.newPage,
      //    }
      // }
      // case ADD_MORE_USERS: {
      //    return {
      //       ...state,
      //       users: [...state.users, ...action.newUsers],
      //    }
      // }
      default:
         return state;
   }
}

export const follow = (userId) => ({ type: 'FOLLOW', userId });
export const unfollow = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsers = (users) => ({ type: 'SET_USERS', users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const checkFollowInProgress = (isFetching, id) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, id });
// export const increaseNewPage = () => ({ type: INCREASE_NEW_PAGE });
// export const addMoreUsers = (newUsers) => ({ type: ADD_MORE_USERS, newUsers });