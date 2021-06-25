import styles from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';


const MyPosts = () => {
   return (
      <div className={styles.wrapper}>
         <h3 className={styles.activities}>
            My activity
         </h3>
         <NewPost />
         <Post message="the weather is so hawt oh ma gawd" likes="21" />
         <Post message="hello" likes="30" />
         <Post message="hello" likes="30" />
         <Post message="hello" likes="30" />
      </div>
   )
}

export default MyPosts;