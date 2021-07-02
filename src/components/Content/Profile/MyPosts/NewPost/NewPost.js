import React from 'react';
import { addPostActionCreator, addPostTextActionCreator } from '../../../../../redux/profileReducer';
import styles from './NewPost.module.css';




const NewPost = (props) => {

   const addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   const onPostTextChange = (e) => {
      const newPostText = e.target.value;
      props.dispatch(addPostTextActionCreator(newPostText));
   };

   return (
      <div className={styles.wrapper}>
         <input value={props.newPostText} onChange={onPostTextChange} />
         <button className={styles.button} onClick={addPost}>Send</button>
      </div>
   )
}

export default NewPost;