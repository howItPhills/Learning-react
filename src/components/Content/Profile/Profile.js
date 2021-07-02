import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import Description from './Description/Description.js';





const Profile = (props) => {
   return (
      <div className={styles.content}>
         <Description friends={props.store.getState().profilePage.friends} />
         <MyPosts store={props.store} posts={props.store.getState().profilePage.posts} />
      </div>
   )
}

export default Profile;