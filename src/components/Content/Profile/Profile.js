import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import Description from './Description/Description.js';





const Profile = (props) => {
   // debugger;
   return (
      <div className={styles.content}>
         <Description friends={props.profilePage.friends} />
         <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
      </div>
   )
}

export default Profile;