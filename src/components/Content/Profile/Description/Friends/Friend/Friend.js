import styles from './Friend.module.css'

const Friend = (props) => {
   return (
      <div className={styles.wrapper}>
         <img src={props.src} className={styles.photo} />
      </div>
   )
}


export default Friend;