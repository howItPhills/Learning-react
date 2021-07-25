import preloader from '../assets/spinner2.svg';
import styles from './preloader.module.css'

let Preloader = () => {
   return <img src={preloader} className={styles.preloader} />
}

export default Preloader;