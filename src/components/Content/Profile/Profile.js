import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import Description from './Description/Description.js';





const Profile = (props) => {
   return (
      <div className={styles.content}>
         <Description friends={props.profilePage.friends} />
         <MyPosts posts={props.profilePage.posts} addPost={props.addPost} />
      </div>
   )
}

export default Profile;