import React from 'react';
import { addPostActionCreator, addPostTextActionCreator } from '../../../../../redux/State';
import styles from './NewPost.module.css';






const NewPost = (props) => {

   let newPostRef = React.createRef();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let onPostTextChange = () => {
      let postText = newPostRef.current.value;
      props.dispatch(addPostTextActionCreator(postText));
   };

   return (
      <div className={styles.wrapper}>
         <input ref={newPostRef} value={props.newPostText} onChange={onPostTextChange} />
         <button className={styles.button} onClick={addPost}>Send</button>
      </div>
   )
}

export default NewPost;