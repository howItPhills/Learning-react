import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logos/logo4.webp';


// "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fadvocate-logo-4.jpg&f=1&nofb=1"

const Header = (props) => {
   return (
      <header className={styles.header}>
         <img src={logo} className={styles.logo} alt='logo' />
         <div className={styles.name}>Authorize</div>
         <div className={styles.loginInfo}>
            {
               props.isAuthorized ? props.login : <NavLink to='/login' className={styles.login}>Login</NavLink >
            }
         </div>
         {
            props.isAuthorized ? <NavLink onClick={props.logout} to='/login'>Logout</NavLink> : null
         }

      </header>
   )
};

export default Header;