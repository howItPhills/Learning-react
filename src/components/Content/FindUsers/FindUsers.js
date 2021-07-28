import { NavLink } from "react-router-dom";
import styles from "./FindUsers.module.css";
import defaultPhoto from "./../../../assets/nophoto.png";
import { dalAPI } from "../../../API/DalApi";

let FindUsers = (props) => {

  let pageAmount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pageAmount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <h2 className={styles.title}>Users to find, friends to meet</h2>
      {props.users.map((u) => (
        <div className={styles.main} key={u.id}>
          <div className={styles.wrapper}>
            <div className={styles.user}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small === null ? defaultPhoto : u.photos.small}
                  className={styles.photo}
                />
              </NavLink>
              {u.followed ? (
                <button disabled={props.followInProgress.includes(u.id)}
                  onClick={() => {
                    props.checkFollowInProgress(true, u.id);
                    dalAPI.unfollowUser(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.checkFollowInProgress(false, u.id);

                    });
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button disabled={props.followInProgress.includes(u.id)} onClick={() => {
                  props.checkFollowInProgress(true, u.id);
                  dalAPI.followUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.follow(u.id);
                    }
                    props.checkFollowInProgress(false, u.id);
                  });
                }}>follow</button>
              )}
            </div>
            <div className={styles.description}>
              <div className={styles.text}>{u.name}</div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.pagination}>
        {pages.map((p) => (
          <span
            className={props.currentPage === p && styles.selected}
            onClick={() => props.onPageChanged(p)}
          >
            {p}
          </span>
        ))}
      </div>
      {/* <button onClick={() => props.showMoreUsers()}>Add users</button> */}
    </div>
  );
};

export default FindUsers;
