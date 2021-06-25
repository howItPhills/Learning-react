import styles from './Navbar.module.css'

const Nav = () => {
   return (
      <nav className={`${styles.nav} ${styles.back}`}>
         <ul>
            <li><a href='/profile'>Profile</a></li>
            <li><a href='/messages'>Messages</a></li>
            <li><a href='/news'>News</a></li>
            <li><a href='/music'>Music</a></li>
            <li><a href='#'>Videos</a></li>
            <li><a href='#'>Settings</a></li>
         </ul>
      </nav>
   )
}

export default Nav;