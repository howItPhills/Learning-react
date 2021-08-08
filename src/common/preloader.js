import preloader from '../assets/spinner.svg';
import styles from './preloader.module.css'

const Preloader = () => {
   return <div className={styles.wrapper}>
      <img src={preloader} className={styles.preloader} alt='preloader' />
   </div>
}

export default Preloader;