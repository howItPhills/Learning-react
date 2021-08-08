import styles from './Profile.module.css';
import Description from './Description/Description.js';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {
   return (
      <div className={styles.content} >
         <Description profileInfo={props.profileInfo} status={props.status} updateStatus={props.updateStatus} />
         <MyPosts posts={props.posts} addPost={props.addPost} photos={props.profileInfo.photos} />
      </div >
   )
}

export default Profile;