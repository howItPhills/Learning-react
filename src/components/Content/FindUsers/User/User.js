import styles from './User.module.css';


const User = (props) => {
   return (
      <div className={styles.main}>
         <div className={styles.wrapper}>
            <div className={styles.user}>
               <img src={props.src} className={styles.photo} />
               <button>follow</button>
            </div>
            <div className={styles.description}>
               <div className={styles.text}>{props.name}</div>
               <div className={styles.text}>{props.age}</div>
               <div className={styles.text}>{props.city}</div>
            </div>
         </div>
      </div >
   )
}

export default User;