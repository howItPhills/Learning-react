import { connect } from 'react-redux'
import { followAC, setUsersAc, unfollowAC } from '../../../redux/findUsersReducer';
import FindUsers from './FindUsers';

const mapStateToProps = (state) => {
   return {
      users: state.findUsersPage.users,
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
         dispatch(setUsersAc(users))
      }
   }
}


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer;