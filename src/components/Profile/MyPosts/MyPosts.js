import styles from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';


const MyPosts = () => {

   let posts = [
      { id: '1', message: 'Hello', likesCount: '21' },
      { id: '2', message: 'The weather is so hot', likesCount: '3' },
      { id: '3', message: 'How are u doin guys', likesCount: '1' },
      { id: '4', message: 'Privet', likesCount: '15' },
   ];

   let postsElements =
      posts.map(p => <Post message={p.message} likes={p.likesCount} />)

   return (
      <div className={styles.wrapper}>
         <h3 className={styles.activities}>
            My activity
         </h3>
         <NewPost />
         {postsElements}
      </div>
   )
}

export default MyPosts;