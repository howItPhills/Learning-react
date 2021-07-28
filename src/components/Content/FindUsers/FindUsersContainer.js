import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  checkFollowInProgress,
  getUsersThunkCreator,
  onChangePageThunkCreactor,
} from "../../../redux/findUsersReducer";
import FindUsers from "./FindUsers";
import Preloader from "../../../common/preloader";


class FindUsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.onChangePageThunkCreactor(pageNumber, this.props.pageSize);
  };


  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <FindUsers
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            showMoreUsers={this.showMoreUsers}
            followInProgress={this.props.followInProgress}
            checkFollowInProgress={this.props.checkFollowInProgress}
          />
        )}
      </>
    );
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
    followInProgress: state.findUsersPage.followInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  checkFollowInProgress,
  getUsers: getUsersThunkCreator,
  onPageChanged: onChangePageThunkCreactor,
  // increaseNewPage,
  // addMoreUsers,
})(FindUsersContainer);
