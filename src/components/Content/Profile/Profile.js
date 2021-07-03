import styles from './Profile.module.css';
import Description from './Description/Description.js';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = () => {
   return (
      <div className={styles.content} >
         <Description />
         <MyPostsContainer />
      </div >
   )
}

export default Profile;