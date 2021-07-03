import styles from './Header.module.css';

const Header = () => {
   return (
      <header className={styles.header}>
         <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fadvocate-logo-4.jpg&f=1&nofb=1" className={styles.logo} />
         <p>my space</p>
      </header>
   )
};

export default Header;