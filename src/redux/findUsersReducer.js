let inintialState = {
   users: [],
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
            users: [...action.users],
         }
      }
      default:
         return state;
   }
}

export const followAC = (userId) => ({ type: 'FOLLOW', userId });
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsersAc = (users) => ({ type: 'SET_USERS', users });