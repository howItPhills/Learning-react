import { NavLink } from "react-router-dom";
import defaultPhoto from "./../../../assets/nophoto.png";
import Pagination from "./Pagination/Pagination";


const FindUsers = (props) => {

  return (
    <div>
      <div className="users" >
        {props.users.map((u) => (
          <div className="users__wrapper" key={u.id}>
            <div className="users__user">
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small === null ? defaultPhoto : u.photos.small} alt='userPhoto'
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
            <div className="users__text">{u.name}</div>
          </div>
        ))}
      </div>
      <Pagination totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} portionSize={props.portionSize} />
    </div>
  )
};

export default FindUsers;