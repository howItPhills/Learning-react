import React from 'react';
import styles from './NewPost.module.css';


let newPostRef = React.createRef();


const NewPost = (props) => {
   let hi = () => {
      let post = newPostRef.current.value;
      props.addPost(post);
      newPostRef.current.value = "";
   }

   let onPostChange = () => {

   };

   return (
      <div className={styles.wrapper}>
         <input placeholder='Send your message...' ref={newPostRef} value={props.newPostText} onChange={onPostChange} />
         <button className={styles.button} onClick={hi}>Send</button>
      </div>
   )
}

export default NewPost;