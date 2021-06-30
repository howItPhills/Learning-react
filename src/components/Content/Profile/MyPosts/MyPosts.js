import styles from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';


const MyPosts = (props) => {
   let postsElements =
      props.posts.map(p => <Post message={p.message} likes={p.likesCount} />)

   return (
      <div className={styles.wrapper}>
         <h3 className={styles.activities}>
            My activity
         </h3>
         <NewPost dispatch={props.dispatch} newPostText={props.newPostText} />
         {postsElements}
      </div>
   )
}

export default MyPosts;