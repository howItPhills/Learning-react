import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
   let postsElements =
      props.posts.map(p => <Post message={p.message} likes={p.likesCount} photos={props.photos} key={p.id} />)

   const addPost = () => {
      props.addPost();
   }

   const onPostTextChange = (e) => {
      const newPostText = e.target.value;
      props.addPostText(newPostText);
   };

   return (
      <div className={styles.wrapper}>
         <h3 className={styles.activities}>
            My activity
         </h3>
         <div className={styles.inputWrapper}>
            <input value={props.newPostText} onChange={onPostTextChange} />
            <button className={styles.button} onClick={addPost}>Send</button>
         </div>
         {postsElements}
      </div>
   )
}

export default MyPosts;