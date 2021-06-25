import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import Description from './Description/Description.js';

const Profile = () => {
   return (
      <div className={styles.content}>
         <Description />
         <MyPosts />
      </div>
   )
}

export default Profile;