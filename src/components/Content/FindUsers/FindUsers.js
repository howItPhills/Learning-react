import React from 'react';
import * as axios from 'axios';
import styles from './FindUsers.module.css'


class FindUsers extends React.Component {
   constructor(props) {
      super(props);
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
         this.props.setUsers(response.data.items)
      });
   }
   render() {
      return <div>
         <h2 h2 className={styles.title} > Users to find, friends to meet</h2>
         {
            this.props.users.map(u =>
               <div className={styles.main} key={u.id}>
                  <div className={styles.wrapper}>
                     <div className={styles.user}>
                        <img src={(u.photos.small === null) ? "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.asianetnews.com%2Fimg%2Fdefault-user-avatar.png&f=1&nofb=1" : u.photos.small} className={styles.photo} />
                        {u.followed ?
                           <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button> :
                           <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
                     </div>
                     <div className={styles.description}>
                        <div className={styles.text}>{u.name}</div>
                     </div>
                  </div>
               </div >
            )
         }
      </div >
   }
}
export default FindUsers;