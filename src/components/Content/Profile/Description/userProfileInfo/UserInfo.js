const UserInfo = ({ profileInfo, showFullName = false, ...props }) => {
   return (
      <div className={props.infoWrapper}>
         {
            showFullName &&
            <div className={props.infoItem}>
               <span className={props.bold}>Full Name: </span> <span className={props.infoValue}>{profileInfo.fullName || 'no info'}</span>
            </div>
         }
         <div className={props.infoItem} >
            <span className={props.bold}>About me: </span><span className={props.infoValue}>{profileInfo.aboutMe || 'no info'}</span>
         </div>
         <div className={props.infoItem}>
            <span className={props.bold}>Looking for a job: </span> <span className={props.infoValue}>{profileInfo.lookingForAJob ? 'yes' : 'no info'}</span>
         </div>
         {
            profileInfo.lookingForAJob &&
            <div className={props.infoItem}>
               <span className={props.bold}>Looking for a job description: </span> <span className={`${props.jobDescription} ${props.infoValue} `}>{profileInfo.lookingForAJobDescription || 'no info'}</span>
            </div>
         }
         <div className={props.contactsWrapper}>
            <span className={props.bold}>Contacts: </span>{Object.keys(profileInfo.contacts).map(key => {
               return <Contact key={key} contactTitle={key} contactValue={profileInfo.contacts[key]} bold={props.bold} contact={props.contact} infoValue={props.infoValue} />
            })}
         </div>
      </div>
   )
}


const Contact = ({ contactTitle, contactValue, bold, contact, infoValue }) => {

   return (
      <div className={contact}>
         <span className={bold}>{contactTitle}: </span> <span className={infoValue}>{contactValue || 'no info'}</span>
      </div>
   )
}

export default UserInfo