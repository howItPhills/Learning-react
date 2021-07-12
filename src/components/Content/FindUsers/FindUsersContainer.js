import { connect } from 'react-redux'
import FindUsers from './FindUsers';

const mapStateToProps = (state) => {
   return {
      users: state.findUsersPage.users,
   }
}

const mapDispatchToProps = (dispatch) => {

}


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer;