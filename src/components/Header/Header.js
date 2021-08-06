import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logos/logo4.webp';
import { connect } from 'react-redux';
import { logout } from "../../redux/authReducer";


// "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fadvocate-logo-4.jpg&f=1&nofb=1"

const Header = (props) => {
   return (
      <header className={styles.header}>
         <img src={logo} className={styles.logo} alt='logo' />
         <div className={styles.logoName}>Authorize</div>
         {
            props.isAuthorized ?
               <div className={styles.loginInfo}>
                  <NavLink to='/profile' className={styles.name}>{props.login}</NavLink>
                  <button onClick={props.logout} className={styles.logout}>Logout</button>
               </div> :
               <NavLink to='/login' className={styles.login}>Login</NavLink >
         }
      </header>
   )
};

const mapStateToProps = (state) => {
   return {
      isAuthorized: state.auth.isAuthorized,
      login: state.auth.login,
   };
};

export default connect(mapStateToProps, { logout })(Header)