import styles from './Description.module.css';
import defaultPhoto from '../../../../assets/nophoto.png';
import Status from './Status/Status';
import uploadIcon from '../../../../assets/uploadIcon.svg'
import UserInfo from './userProfileInfo/UserInfo';

const Description = ({ updatePhoto, profileInfo, ...props }) => {
   const onPhotoChange = (e) => {
      const files = e.target.files
      files.length > 0 && updatePhoto(files[0])
   }

   return (
      <div className={styles.wrapper}>
         <div className={styles.nameWrapper}>
            <img src={profileInfo.photos.large || defaultPhoto} className={styles.photo} alt='avatar' />
            {props.isOwner &&
               <div className={styles.upload}>
                  <label htmlFor="photo"><img src={uploadIcon} alt="uploadIcon" width='35' /></label>
                  <input type='file' onChange={onPhotoChange} name="photo" id='photo' />
               </div>}
            <div className={styles.intro}>
               <div className={styles.name}>{profileInfo.fullName}</div>
               <Status status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
            </div>
         </div>
         <UserInfo profileInfo={profileInfo} infoWrapper='infoWrapper' contactsWrapper="contactsWrapper" bold='bold' />
      </div>
   )
}

export default Description;