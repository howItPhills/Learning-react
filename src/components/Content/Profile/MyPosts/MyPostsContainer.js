import { connect } from "react-redux";
import { addPostActionCreator, addPostTextActionCreator } from "../../../../redux/profileReducer";
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addPost() {
         dispatch(addPostActionCreator());
      },
      onPostTextChange(newPostText) {
         dispatch(addPostTextActionCreator(newPostText));
      }
   }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;