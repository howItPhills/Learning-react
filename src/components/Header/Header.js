import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
   // debugger;
   return (
      <header className={styles.header}>
         <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fadvocate-logo-4.jpg&f=1&nofb=1" className={styles.logo} />
         <p>my space</p>
         <div className={styles.loginInfo}>
            {
               props.isAuthorized ? props.login : <NavLink to='/login' className={styles.login}>Login</NavLink >
            }
         </div>

      </header>
   )
};

export default Header;