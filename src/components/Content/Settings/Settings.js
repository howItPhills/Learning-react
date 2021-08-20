import { useState } from 'react';
import UserInfo from '../Profile/Description/userProfileInfo/UserInfo';
import styles from './Settings.module.css';
import SettingsForm from './SettingsForm';


const Settings = ({ profileInfo, updateProfile }) => {

   const [editMode, setEditMode] = useState(false)

   return (
      <div className={styles.div}>
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




export default Settings