import React from "react";
import { connect } from "react-redux";
import {
  addMoreUsers,
  follow,
  increaseNewPage,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  checkFollowInProgress,
} from "../../../redux/findUsersReducer";
import FindUsers from "./FindUsers";
import Preloader from "../../../common/preloader";
import { dalAPI } from "../../../API/DalApi";

class FindUsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    dalAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    dalAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

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
  // increaseNewPage,
  // addMoreUsers,
})(FindUsersContainer);
