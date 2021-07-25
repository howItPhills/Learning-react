import React from 'react';
import { connect } from 'react-redux'
import { addMoreUsersAC, followAC, increaseNewPageAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from '../../../redux/findUsersReducer';
import FindUsers from './FindUsers';
import * as axios from 'axios';
import Preloader from '../../../common/preloader';


class FindUsersAPI extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
         });
   }

   // showMoreUsers = () => {
   //    console.log(this.props.newPage);
   //    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.newPage}&count=${this.props.pageSize}`).then
   //       (response => {
   //          this.props.addMoreUsers(response.data.items)
   //          this.props.increaseNewPage();
   //       });
   //    console.log(this.props.newPage);
   // }
   render() {
      return <>
         {this.props.isFetching ?
            <Preloader /> :
            <FindUsers
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               users={this.props.users}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               showMoreUsers={this.showMoreUsers}
            />}
      </>
   }
}


const mapStateToProps = (state) => {
   return {
      users: state.findUsersPage.users,
      pageSize: state.findUsersPage.pageSize,
      totalUsersCount: state.findUsersPage.totalUsersCount,
      currentPage: state.findUsersPage.currentPage,
      isFetching: state.findUsersPage.isFetching,
      newPage: state.findUsersPage.newPage,
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
      toggleIsFetching: (isFetching) => {
         dispatch(toggleIsFetchingAC(isFetching))
      },
      // increaseNewPage: () => {
      //    dispatch(increaseNewPageAC())
      // },
      // addMoreUsers: (newUsers) => {
      //    dispatch(addMoreUsersAC(newUsers))
      // },
   }
}


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPI)

export default FindUsersContainer;