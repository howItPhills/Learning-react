import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import withAuthRedirect from "../../../hoc/authHoc";

import { selectProfileInfo } from "../../../redux/profile/profile.selectors";
import { selectAuthorizedId } from "../../../redux/auth.selectors";

import {
   getProfile,
   setProfile,
   getStatus,
} from "../../../redux/profile/profile.actions";

import Description from './Description/Description.js';
import MyPosts from './MyPosts/MyPosts';

import Preloader from "../../../common/preloader";

import styles from './Profile.module.css';

const Profile = ({ match, authorizedId, getProfile, profileInfo, getStatus }) => {

   useEffect(() => {
      let { userId } = match.params
      if (!userId) {
         userId = authorizedId;
      }
      getProfile(userId);
      getStatus(userId);
      return () => {
         setProfile(null)
      }
   }, [match.params, getProfile, getStatus, authorizedId])

   if (!profileInfo) return <Preloader />
   return (
      <div className={styles.content} >
         <Description
            isOwner={!match.params.userId}
            profileInfo={profileInfo}
         />
         <MyPosts
            photos={profileInfo.photos}
         />
      </div >
   )
}

const MapStateToProps = createStructuredSelector({
   profileInfo: selectProfileInfo,
   authorizedId: selectAuthorizedId,
});


export default compose(connect(MapStateToProps, {
   getProfile,
   setProfile,
   getStatus,
}), withAuthRedirect, withRouter)(Profile)