import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import Description from './Description/Description.js';

const Profile = () => {
   return (
      <main className={styles.content}>
         <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.w3schools.com%2Fcss%2Fimg_mountains.jpg&f=1&nofb=1' className={styles.image} />
         <Description />
         <MyPosts />
      </main>
   )
}

export default Profile;