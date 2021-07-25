import { NavLink } from 'react-router-dom';
import styles from './FindUsers.module.css'


let FindUsers = (props) => {
   let pageAmount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];

   for (let i = 1; i <= pageAmount; i++) {
      pages.push(i);
   }

   return <div>
      <h2 className={styles.title}>Users to find, friends to meet</h2>
      {
         props.users.map(u =>
            <div className={styles.main} key={u.id}>
               <div className={styles.wrapper}>
                  <div className={styles.user}>
                     <NavLink to='/profile/2'>
                        <img src={(u.photos.small === null) ? "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.asianetnews.com%2Fimg%2Fdefault-user-avatar.png&f=1&nofb=1" : u.photos.small} className={styles.photo} />
                     </NavLink>
                     {u.followed ?
                        <button onClick={() => { props.unfollow(u.id) }}>unfollow</button> :
                        <button onClick={() => { props.follow(u.id) }}>follow</button>}
                  </div>
                  <div className={styles.description}>
                     <div className={styles.text}>{u.name}</div>
                  </div>
               </div>
            </div >
         )
      }
      <div className={styles.pagination}>
         {pages.map(p => <span className={props.currentPage === p && styles.selected} onClick={() => props.onPageChanged(p)}>{p}</span>)}
      </div>
      {/* <button onClick={() => props.showMoreUsers()}>Add users</button> */}
   </div >
}

export default FindUsers;