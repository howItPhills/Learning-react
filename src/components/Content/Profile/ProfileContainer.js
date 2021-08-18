import React from "react";
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
} from "../../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  refreshProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedId;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId)
  }
  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps) {
    this.props.match.params.userId !== prevProps.match.params.userId && this.refreshProfile()
  }

  render() {
    if (!this.props.profileInfo) return <Preloader />
    return <Profile {...this.props} isOwner={!this.props.match.params.userId} />;
  }
}




const MapStateToProps = (state) => {
  return {
    posts: getPosts(state),
    friends: getFriends(state),
    newPostText: state.profilePage.newPostText,
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
}), withRouter)(ProfileContainer)