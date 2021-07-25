import React from 'react';
import { connect } from 'react-redux';
import { addPost, addPostText } from '../../../redux/profileReducer';
import Profile from './Profile';



class ProfileContainer extends React.Component {
   render() {
      return <>
         <Profile
            posts={this.props.posts}
            friends={this.props.friends}
            newPostText={this.props.newPostText}
            addPost={this.props.addPost}
            addPostText={this.props.addPostText}
         />
      </>
   }
}

const MapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      friends: state.profilePage.friends,
      newPostText: state.profilePage.newPostText,
   }
}
// const MapDispatchToProps = (dispatch) => {
//    return {
//       addPost() {
//          dispatch(addPostActionCreator());
//       },
//       onPostTextChange(newPostText) {
//          dispatch(addPostTextActionCreator(newPostText));
//       },
//    }
// }

export default connect(MapStateToProps, {
   addPost,
   addPostText,
})(ProfileContainer);