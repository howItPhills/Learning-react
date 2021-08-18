import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logos/logo.jpg';
import { connect } from 'react-redux';
import { logout } from "../../redux/authReducer";



const Header = (props) => {
   return (
      <header className={styles.header}>
         <img src={logo} className={styles.logo} alt='logo' />
         <div className={styles.logoName}>Unite</div>
         {
            props.isAuthorized ?
               <div className={styles.loginInfo}>
                  <NavLink to='/profile' className={styles.name}>{props.login}</NavLink>
                  <button onClick={props.logout} className={styles.logout}>Quit</button>
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