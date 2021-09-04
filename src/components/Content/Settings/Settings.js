import { connect } from 'react-redux';
import { getProfile, setProfile, updateProfile } from "../../../redux/profileReducer";
import Preloader from '../../../common/preloader';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import UserInfo from '../Profile/Description/userProfileInfo/UserInfo';
import styles from './Settings.module.css';
import SettingsForm from './SettingsForm';
import { compose } from 'redux';
import withAuthRedirect from '../../../hoc/authHoc';


const Settings = ({ profileInfo, updateProfile, getProfile, authorizedId, setProfile }) => {

   useEffect(() => {
      authorizedId && getProfile(authorizedId);
      return () => {
         setProfile(null)
      }
   }, [authorizedId])

   const [editMode, setEditMode] = useState(false)


   if (!profileInfo) return <Preloader />

   return (
      <div className={styles.settings}>
         <div className={styles.titleWrapper}>
            <div className={styles.title}>My Information</div>
            {!editMode && <button className={styles.button} onClick={() => { setEditMode(true) }}>Change</button>}
         </div>
         {editMode ?
            <SettingsForm profileInfo={profileInfo} updateProfile={updateProfile} setEditMode={setEditMode} /> :
            <UserInfo profileInfo={profileInfo} infoItem='infoItem' showFullName={true} jobDescription='jobDescription' contact='contact' infoValue='infoValue' />
         }
      </div>

   )
}

const mapStateToProps = (state) => {
   return {
      profileInfo: state.profilePage.profileInfo,
      authorizedId: state.auth.id,
   }
}


export default compose(withAuthRedirect, connect(mapStateToProps, {
   getProfile,
   updateProfile,
   setProfile,
}))(Settings);