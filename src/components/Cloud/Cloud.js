import { NavLink } from 'react-router-dom';
import styles from './Cloud.module.css';
import defaultPhoto from '../../assets/nophoto.png';


const Cloud = ({ profileInfoCloud, isAuthorized }) => {
   if (!profileInfoCloud || !isAuthorized) return <div className={styles.cloud}></div>
   return (
      <NavLink to='/profile' className={styles.cloud}>
         <div className={styles.photo}>
            {<img src={profileInfoCloud.photos.small || defaultPhoto} alt="cloudPhoto" />}
         </div>
         <div className={styles.name}>
            {profileInfoCloud.fullName}
         </div>
      </NavLink>
   )
}




export default Cloud;
