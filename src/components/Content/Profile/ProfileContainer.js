import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "../../../common/preloader";
import withAuthRedirect from "../../../hoc/authHoc";
import {
  addPost,
  getProfile,
  getStatus,
  updateStatus,
} from "../../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 18452;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId)
  }
  render() {
    if (!this.props.profileInfo) return <Preloader />
    return <Profile {...this.props} />;
  }
}




const MapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    friends: state.profilePage.friends,
    newPostText: state.profilePage.newPostText,
    profileInfo: state.profilePage.profileInfo,
    status: state.profilePage.status,
  };
};




export default compose(withAuthRedirect, connect(MapStateToProps, {
  addPost,
  getProfile,
  getStatus,
  updateStatus,
}), withRouter)(ProfileContainer)