import styles from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';


const MyPosts = () => {
   return (
      <div>
         <div>
            My posts
         </div>
         <NewPost />
         <Post message="how are u?" likes="21" />
         <Post message="hello" likes="30" />
      </div>
   )
}

export default MyPosts;