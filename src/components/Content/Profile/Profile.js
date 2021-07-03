import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import Description from './Description/Description.js';
import StoreContext from './../../../StoreContext';



const Profile = () => {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               return (<div className={styles.content}>
                  <Description friends={store.getState().profilePage.friends} />
                  <MyPosts profilePage={store.getState().profilePage} posts={store.getState().profilePage.posts} dispatch={store.dispatch} />
               </div>)
            }
         }
      </StoreContext.Consumer>
   )
}

export default Profile;