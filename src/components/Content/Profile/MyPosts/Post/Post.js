import styles from './Post.module.css';
import defaultPhoto from '../../../../../assets/nophoto.png';


// "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FNgM3E1tVeirU3eKjAIqewHaJT%26pid%3DApi&f=1"
const Post = (props) => {
   return (
      <div className={styles.item}>
         <div className={styles.wrapper}>
            <img src={props.photos.small ?? defaultPhoto} className={styles.photo} />
            <div className={styles.message}>{props.message}</div>
         </div>
         <div className={styles.counter}>
            <button className={styles.button}>Like</button>
            <span className={styles.like}>{props.likes}</span>
         </div>
      </div>
   )
}

export default Post;