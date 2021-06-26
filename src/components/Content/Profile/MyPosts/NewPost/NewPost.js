import styles from './NewPost.module.css'


const NewPost = () => {
   return (
      <div className={styles.wrapper}>
         <input placeholder='Send your message...' />
         <button className={styles.button}>Send</button>
      </div>
   )
}

export default NewPost;