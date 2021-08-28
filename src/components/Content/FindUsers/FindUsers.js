import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  getUsers,
  onPageChanged,
  unfollowing,
  following,
  setUsers,
} from "../../../redux/findUsersReducer";
import Pagination from "./Pagination/Pagination";
import Preloader from "../../../common/preloader";
import defaultPhoto from "./../../../assets/nophoto.png";

// Preloader is here for norerendering pagination

const FindUsers = React.memo((props) => {

  const [currentPage, setCurrentPage] = useState(1)


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
    <div className="findusers">
      {props.isFetching ?
        <div className="findusers__preloader"><Preloader /></div> :
        <div className="users" >
          {props.users.map((u) => (
            <div className="users__wrapper" key={u.id}>
              <div className="users__user">
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small || defaultPhoto} alt='userPhoto'
                    className="users__photo"
                  />
                </NavLink>
                {u.followed ? (
                  <button disabled={props.followInProgress.includes(u.id)}
                    onClick={() => {
                      props.unfollowing(u.id)
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button disabled={props.followInProgress.includes(u.id)} onClick={() => {
                    props.following(u.id)
                  }}>follow</button>
                )}
              </div>
              <div className="users__description">
                <NavLink to={`/profile/${u.id}`} className="users__name">{u.name}</NavLink>
                <div className="users__status">{u.status}</div>
              </div>
            </div>
          ))}
        </div>}
      <div className='users__pagination'>
        <Pagination
          pageSize={props.pageSize}
          portionSize={props.portionSize}
          totalItemsCount={props.totalUsersCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onPageChanged={onPageChanged}
        />
      </div>
    </div>
  )
})


const mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users,
    pageSize: state.findUsersPage.pageSize,
    totalUsersCount: state.findUsersPage.totalUsersCount,
    portionSize: state.findUsersPage.portionSize,
    followInProgress: state.findUsersPage.followInProgress,
    isFetching: state.findUsersPage.isFetching,
  };
};


export default compose(connect(mapStateToProps, {
  onPageChanged,
  getUsers,
  unfollowing,
  following,
  setUsers,
}))(FindUsers)