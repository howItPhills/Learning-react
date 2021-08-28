import React from "react";
import { connect } from "react-redux";
import {
  getUsers,
  onPageChanged,
  unfollowing,
  following,
  setUsers,
} from "../../../redux/findUsersReducer";
import FindUsers from "./FindUsers";
import { compose } from "redux";
import { useState } from "react";
import { useEffect } from "react";


const FindUsersContainerHooks = (props) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPortionNumber, setPortionNumber] = useState(1);


  useEffect(() => {
    props.getUsers(currentPage, props.pageSize)
    return () => {
      props.setUsers([])
    }
  }, [])

  const onPageChanged = (pageNumber) => {
    props.onPageChanged(pageNumber, props.pageSize);
  };

  return (
    <div>
      <FindUsers
        users={props.users}
        currentPage={currentPage}
        currentPortionNumber={currentPortionNumber}
        setCurrentPage={setCurrentPage}
        setPortionNumber={setPortionNumber}
        pageSize={props.pageSize}
        portionSize={props.portionSize}
        unfollowing={props.unfollowing}
        following={props.following}
        totalUsersCount={props.totalUsersCount}
        followInProgress={props.followInProgress}
        isFetching={props.isFetching}
        onPageChanged={onPageChanged}
      />
    </div>
  )
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
  setUsers,
}))(FindUsersContainerHooks);
