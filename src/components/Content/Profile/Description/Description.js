import styles from './Description.module.css';
import FriendsContainer from './Friends/FriendsContainer';
import defaultPhoto from '../../../../assets/nophoto.png';
import Status from './Status/Status';
import uploadIcon from '../../../../assets/uploadIcon.svg'

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
            <div>
               <div className={styles.name}>{profileInfo.fullName}</div>
               <Status status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
            </div>
         </div>
         <div className={styles.infoWrapper}>
            <div>
               <strong>About me: </strong>{profileInfo.aboutMe || 'no info'}
            </div>
            <div>
               <strong>Looking for a job: </strong>{profileInfo.lookingForAJob ? 'yes' : 'no info'}
            </div>
            {
               profileInfo.lookingForAJob &&
               <div>
                  <strong>Looking for a job description: </strong>{profileInfo.lookingForAJobDescription || 'no info'}
               </div>
            }
            <div className={styles.contacts}>
               <strong>Contacts: </strong>{Object.keys(profileInfo.contacts).map(key => {
                  return <Contacts contactTitle={key} contactValue={profileInfo.contacts[key]} />
               })}
            </div>

         </div>
      </div>
   )
}

const Contacts = ({ contactTitle, contactValue }) => {

   return (
      <div>
         {contactValue ?
            <div>
               <strong>{contactTitle}: </strong> {contactValue}
            </div> :
            <div>
               <strong>{contactTitle}: </strong> {'no info'}
            </div>}
      </div>
   )
}


export default Description;