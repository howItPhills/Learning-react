import { useDispatch } from 'react-redux'

import Status from './Status/Status';
import UserInfo from './userProfileInfo/UserInfo';

import styles from './Description.module.css';

import uploadIcon from '../../../../assets/uploadIcon.svg'
import defaultPhoto from '../../../../assets/nophoto.png';
import { updatePhoto } from '../../../../redux/profile/profile.actions';

const Description = ({ profileInfo, isOwner }) => {

   const dispatch = useDispatch()

   const onPhotoChange = (e) => {
      const files = e.target.files
      files.length > 0 && dispatch(updatePhoto(files[0]))
   }

   return (
      <div className={styles.wrapper}>
         <div className={styles.nameWrapper}>
            <img src={profileInfo.photos.large || defaultPhoto} className={styles.photo} alt='avatar' />
            {isOwner &&
               <div className={styles.upload}>
                  <label htmlFor="photo"><img src={uploadIcon} alt="uploadIcon" width='35' /></label>
                  <input type='file' onChange={onPhotoChange} name="photo" id='photo' />
               </div>
            }
            <div className={styles.intro}>
               <div className={styles.name}>{profileInfo.fullName}</div>
               <Status isOwner={isOwner} />
            </div>
         </div>
         <UserInfo profileInfo={profileInfo} infoWrapper='infoWrapper' contactsWrapper="contactsWrapper" bold='bold' />
      </div>
   )
}

export default Description