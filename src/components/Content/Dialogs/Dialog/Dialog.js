import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';


const Dialog = ({ id, name }) => {
   return (
      <div className={styles.dialog}>
         <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
      </div >
   )
}


export default Dialog