import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../../redux/findUsersReducer';
import FindUsers from './FindUsers';

const mapStateToProps = (state) => {
   return {
      users: state.findUsersPage.users,
      pageSize: state.findUsersPage.pageSize,
      totalUsersCount: state.findUsersPage.totalUsersCount,
      currentPage: state.findUsersPage.currentPage,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (currentPage) => {
         dispatch(setCurrentPageAC(currentPage))
      },
      setTotalUsersCount: (totalUsersCount) => {
         dispatch(setTotalUsersCountAC(totalUsersCount))
      },
   }
}


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer;