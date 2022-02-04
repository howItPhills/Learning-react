import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
import defaultPhoto from '../../../../assets/nophoto.png';


const Dialog = ({ id, name, photo, lastMessage }) => {
   return (
      <NavLink to={`/dialogs/${id}`} className={styles.dialog}>
         <div><img src={photo || defaultPhoto} alt="avatar" className={styles.photo} /></div>
         <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.lastMessage}>{lastMessage}</div>
         </div>
      </NavLink >
   )
}


export default Dialog