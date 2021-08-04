import preloader from '../assets/spinner.svg';
import styles from './preloader.module.css'

let Preloader = () => {
   return <img src={preloader} className={styles.preloader} alt='preloader' />
}

export default Preloader;