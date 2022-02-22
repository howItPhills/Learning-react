import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


import Pagination from "./Pagination/Pagination";
import Preloader from "../../../common/preloader";
import defaultPhoto from "./../../../assets/nophoto.png";



const FindUsers = ({
  getUsers,
  users,
  setUsers,
  followInProgress,
  totalUsersCount,
  pageSize,
  currentPortionNumber,
  portionSize,
  following,
  unfollowing
}) => {


  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    getUsers(currentPage, pageSize);
    return () => {
      setUsers([])
    }

  }, [currentPage, pageSize, setUsers, getUsers]);

  return (
    <div className="findusers">
      {users.length === 0 ?
        <div className="findusers__preloader">
          <Preloader />
        </div>
        : // Preloader is here to prevent pagination from rerendering
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
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          totalItemsCount={totalUsersCount}
          portionSize={portionSize}
          currentPortionNumber={currentPortionNumber}
        />
      </div>
    </div>
  )
}

export default FindUsers