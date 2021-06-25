import styles from './Post.module.css'

console.log(styles);


const Post = (props) => {
   return (
      <div className={styles.item}>
         {props.message}
         <div className={styles.counter}>
            <button className={styles.button}>Like</button>
            <span className={styles.like}>{props.likes}</span>
         </div>
      </div>
   )
}

export default Post;