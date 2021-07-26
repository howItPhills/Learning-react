import styles from './Profile.module.css';
import Description from './Description/Description.js';
import MyPosts from './MyPosts/MyPosts';
import Preloader from '../../../common/preloader';



const Profile = (props) => {
   if (!props.profileInfo) {
      return <Preloader />
   }
   return (
      <div className={styles.content} >
         <Description profileInfo={props.profileInfo} />
         <MyPosts posts={props.posts} addPost={props.addPost} addPostText={props.addPostText} newPostText={props.newPostText} photos={props.profileInfo.photos} />
      </div >
   )
}

export default Profile;