import { NavLink } from "react-router-dom";
import styles from "./FindUsers.module.css";
import defaultPhoto from "./../../../assets/nophoto.png";


const FindUsers = (props) => {

  let pageAmount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pageAmount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={styles.main} >
        {props.users.map((u) => (
          <div className={styles.wrapper} key={u.id}>
            <div className={styles.user}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small === null ? defaultPhoto : u.photos.small} alt='userPhoto'
                  className={styles.photo}
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
            <div className={styles.description}>
              <div className={styles.text}>{u.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {pages.map((p) => (
          <span
            key={p}
            className={props.currentPage === p && styles.selected}
            onClick={() => props.onPageChanged(p)}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  )
};

export default FindUsers;