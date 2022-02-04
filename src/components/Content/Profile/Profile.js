import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "../../../common/preloader";
import withAuthRedirect from "../../../hoc/authHoc";
import { getFriends, getPosts } from "../../../redux/profile-selectors";
import {
   addPost,
   getProfile,
   getStatus,
   updateStatus,
   updatePhoto,
   setProfile,
} from "../../../redux/profile/profileReducer";
import styles from './Profile.module.css';
import Description from './Description/Description.js';
import MyPosts from './MyPosts/MyPosts';
import { useEffect } from "react";


const Profile = (props) => {

   useEffect(() => {
      let userId = props.match.params.userId;
      if (!userId) {
         userId = props.authorizedId;
      }
      props.getProfile(userId);
      props.getStatus(userId);
      return () => {
         props.setProfile(null)
      }
   }, [props.match.params.userId])

   if (!props.profileInfo) return <Preloader />
   return (
      <div className={styles.content} >
         <Description
            updatePhoto={props.updatePhoto}
            isOwner={!props.match.params.userId}
            profileInfo={props.profileInfo}
            status={props.status}
            updateStatus={props.updateStatus}
         />
         <MyPosts
            posts={props.posts}
            addPost={props.addPost}
            photos={props.profileInfo.photos}
         />
      </div >
   )
}


const MapStateToProps = (state) => {
   return {
      posts: getPosts(state),
      friends: getFriends(state),
      profileInfo: state.profilePage.profileInfo,
      status: state.profilePage.status,
      authorizedId: state.auth.id,
   };
};


export default compose(withAuthRedirect, connect(MapStateToProps, {
   addPost,
   getProfile,
   getStatus,
   updateStatus,
   updatePhoto,
   setProfile,
}), withRouter)(Profile)
