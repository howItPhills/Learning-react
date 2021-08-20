import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
   return (
      <nav className={`${styles.nav} ${styles.back}`}>
         <ul>
            <li><NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink></li>
            <li><NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink></li>
            <li><NavLink to='/findusers' activeClassName={styles.activeLink}>Users</NavLink></li>
            <li><NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink></li>
         </ul>
      </nav>
   )
}

export default Nav;