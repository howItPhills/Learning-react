import styles from './Friends.module.css';
import Friend from './Friend/Friend'


const Friends = (props) => {
   let friendsElements = props.friends.map(f => <Friend src={f.src} />)
   return (
      <div className={styles.friends}>
         <h3 className={styles.title}>My Friends</h3>
         <div className={styles.wrapper}>
            {friendsElements}
         </div>
      </div>
   )

};


export default Friends;