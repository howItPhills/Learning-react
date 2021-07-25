import styles from './Profile.module.css';
import Description from './Description/Description.js';
import MyPosts from './MyPosts/MyPosts';



const Profile = (props) => {
   debugger;
   return (
      <div className={styles.content} >
         <Description />
         <MyPosts posts={props.posts} addPost={props.addPost} addPostText={props.addPostText} newPostText={props.newPostText} />
      </div >
   )
}

export default Profile;