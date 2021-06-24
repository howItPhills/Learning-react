import styles from './Navbar.module.css'

const Nav = () => {
   return (
      <nav className={`${styles.nav} ${styles.back}`}>
         <ul>
            <li><a href='#'>Profile</a></li>
            <li><a href='#'>Messages</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Music</a></li>
            <li><a href='#'>Videos</a></li>
            <li><a href='#'>Settings</a></li>
         </ul>
      </nav>
   )
}

export default Nav;