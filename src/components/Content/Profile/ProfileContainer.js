import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  addPost,
  addPostText,
  getProfile,
} from "../../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const MapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    friends: state.profilePage.friends,
    newPostText: state.profilePage.newPostText,
    profileInfo: state.profilePage.profileInfo,
  };
};

export default connect(MapStateToProps, {
  addPost,
  addPostText,
  getProfile,
})(withRouter(ProfileContainer));