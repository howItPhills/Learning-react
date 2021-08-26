import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../../../common/preloader";
import defaultPhoto from "./../../../assets/nophoto.png";
import Pagination from "./Pagination/Pagination";


const FindUsers = React.memo((props) => {
  return (
    <div className="findusers">
      {props.isFetching ? <div className="findusers__preloader"><Preloader /></div> : <div className="users" >
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
            <NavLink to={`/profile/${u.id}`} className="users__description">
              <div className="users__name">{u.name}</div>
              <div className="users__status">{u.status}</div>
            </NavLink>
          </div>
        ))}
      </div>}
      <div className='users__pagination'>
        <Pagination
          totalItemsCount={props.totalUsersCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onPageChanged={props.onPageChanged}
          portionSize={props.portionSize}
          currentPortionNumber={props.currentPortionNumber}
          setCurrentPortionNumber={props.setCurrentPortionNumber}
        />
      </div>
    </div>
  )
})

export default FindUsers;