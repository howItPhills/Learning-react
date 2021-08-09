import React from "react";
import { connect } from "react-redux";
import {
  getUsers,
  onPageChanged,
  unfollowing,
  following,
} from "../../../redux/findUsersReducer";
import FindUsers from "./FindUsers";
import Preloader from "../../../common/preloader";
import { compose } from "redux";


class FindUsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.onPageChanged(pageNumber, this.props.pageSize);
  };


  render() {
    if (this.props.isFetching) return <Preloader />
    return <FindUsers
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      users={this.props.users}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      followInProgress={this.props.followInProgress}
      unfollowing={this.props.unfollowing}
      following={this.props.following}
      portionSize={this.props.portionSize}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users,
    pageSize: state.findUsersPage.pageSize,
    totalUsersCount: state.findUsersPage.totalUsersCount,
    currentPage: state.findUsersPage.currentPage,
    followInProgress: state.findUsersPage.followInProgress,
    isFetching: state.findUsersPage.isFetching,
    portionSize: state.findUsersPage.portionSize,
  };
};

export default compose(connect(mapStateToProps, {
  onPageChanged,
  getUsers,
  unfollowing,
  following,
}))(FindUsersContainer);
