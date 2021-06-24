import styles from './Profile.module.css'


const Profile = () => {
   return (
      <main className={styles.content}>
         <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.w3schools.com%2Fcss%2Fimg_mountains.jpg&f=1&nofb=1' className={styles.image} />
         <div>
            ava+desrctiption
         </div>
         <div>
            New post
         </div>
         <div>
            post 1
         </div>
         <div>
            post2
         </div>
      </main>
   )
}

export default Profile;