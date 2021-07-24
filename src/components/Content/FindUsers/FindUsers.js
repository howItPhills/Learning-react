import React from 'react';
import * as axios from 'axios';
import styles from './FindUsers.module.css'


class FindUsers extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
         });
   }

   render() {

      let pageAmount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

      let pages = [];

      for (let i = 1; i <= pageAmount; i++) {
         pages.push(i);
      }

      return <div>
         <h2 className={styles.title}>Users to find, friends to meet</h2>
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
         <div className={styles.pagination}>
            {pages.map(p => <span className={this.props.currentPage === p && styles.selected} onClick={() => this.onPageChanged(p)}>{p}</span>)}

         </div>
      </div >
   }
}
export default FindUsers;