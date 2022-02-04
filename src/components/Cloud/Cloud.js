import { NavLink } from 'react-router-dom';
import styles from './Cloud.module.css';
import defaultPhoto from '../../assets/nophoto.png';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { getProfileCloud } from "../../redux/profile/profile.actions";


const Cloud = ({ getProfileCloud, profileInfoCloud, authorizedId }) => {

   useEffect(() => {
      authorizedId && getProfileCloud(authorizedId);
   }, [authorizedId, getProfileCloud])

   if (!profileInfoCloud || !authorizedId) return <div className={styles.cloud}></div>
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

const mapStateToProps = (state) => {
   return {
      profileInfoCloud: state.profilePage.profileInfoCloud,
      authorizedId: state.auth.id,
   }
}


export default connect(mapStateToProps, { getProfileCloud })(Cloud)