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
import withAuthRedirect from "../../../hoc/authHoc";


class FindUsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.onPageChanged(pageNumber, this.props.pageSize);
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
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            followInProgress={this.props.followInProgress}
            unfollowing={this.props.unfollowing}
            following={this.props.following}
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
    followInProgress: state.findUsersPage.followInProgress,
  };
};

export default compose(withAuthRedirect, connect(mapStateToProps, {
  onPageChanged,
  getUsers,
  unfollowing,
  following,
}))(FindUsersContainer);
