// import { compose } from "redux";
// import { connect } from "react-redux";
// import {
//   getUsers,
//   onPageChanged,
//   unfollowing,
//   following,
//   setUsers,
// } from "../../../redux/findUsersReducer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import Preloader from "../../../common/preloader";
import defaultPhoto from "./../../../assets/nophoto.png";
import { dalAPI } from "../../../API/DalApi";


const FindUsers = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [totalUsersCount, setTotalUsersCount] = useState(0)
  const [pageSize, setPageSize] = useState(9)


  const [users, setUsers] = useState([])
  useEffect(() => {
    dalAPI.getUsers(currentPage, pageSize).then(data => {
      setUsers([...data.items])
      setTotalUsersCount(data.totalCount)
    })
  }, [currentPage, pageSize, totalUsersCount]);


  const [followInProgress, setFollowInProgress] = useState([])

  const followUnfollowFlow = async (userId, dalMethod, flag = false) => {
    setFollowInProgress([...followInProgress, userId])
    const res = await dalMethod(userId);
    if (res.resultCode === 0) {
      setFollowInProgress(
        followInProgress.filter(id => id !== userId)
      )
      setUsers(
        users.map(user => {
          if (user.id === userId) return { ...user, followed: flag }
          return user
        })
      )
    }
  }

  const following = async (id) => {
    followUnfollowFlow(id, dalAPI.followUser.bind(dalAPI), true)
  }

  const unfollowing = async (id) => {
    followUnfollowFlow(id, dalAPI.unfollowUser.bind(dalAPI))
  }

  // useEffect(() => {
  //   props.getUsers(currentPage, props.pageSize)
  //   return () => {
  //     props.setUsers([])
  //   }
  // }, [])

  // const onPageChanged = (pageNumber) => {
  //   props.onPageChanged(pageNumber, props.pageSize);
  // };

  return (
    <div className="findusers">
      {users.length === 0 ?
        <div className="findusers__preloader"><Preloader /></div> : // Preloader is here to prevent pagination from rerendering
        <div className="users" >
          {users.map((u) => (
            <div className="users__wrapper" key={u.id}>
              <div className="users__user">
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small || defaultPhoto} alt='userPhoto'
                    className="users__photo"
                  />
                </NavLink>
                {u.followed ? (
                  <button disabled={followInProgress.includes(u.id)}
                    onClick={() => {
                      unfollowing(u.id)
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button disabled={followInProgress.includes(u.id)} onClick={() => {
                    following(u.id)
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
          pageSize={pageSize}
          currentPage={currentPage}
          totalItemsCount={totalUsersCount}
          setCurrentPage={setCurrentPage}
        // onPageChanged={onPageChanged}
        />
      </div>
    </div>
  )
}


// const mapStateToProps = (state) => {
//   return {
//     users: state.findUsersPage.users,
//     pageSize: state.findUsersPage.pageSize,
//     totalUsersCount: state.findUsersPage.totalUsersCount,
//     portionSize: state.findUsersPage.portionSize,
//     followInProgress: state.findUsersPage.followInProgress,
//   };
// };


// export default compose(connect(mapStateToProps, {
//   onPageChanged,
//   getUsers,
//   unfollowing,
//   following,
//   setUsers,
// }))(FindUsers)

export default FindUsers