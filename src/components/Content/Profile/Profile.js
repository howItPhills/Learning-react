import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import Description from './Description/Description.js';

const Profile = (props) => {
   return (
      <div className={styles.content}>
         <Description />
         <MyPosts posts={props.posts} />
      </div>
   )
}

export default Profile;