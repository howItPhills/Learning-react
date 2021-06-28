import React from 'react';
import styles from './NewPost.module.css';


let newPostRef = React.createRef();


const NewPost = (props) => {
   let hi = () => {
      props.addPost();
   }

   let onPostChange = () => {
      let text = newPostRef.current.value;
      props.addText(text);
   };

   return (
      <div className={styles.wrapper}>
         <input ref={newPostRef} value={props.newPostText} onChange={onPostChange} />
         <button className={styles.button} onClick={hi}>Send</button>
      </div>
   )
}

export default NewPost;