import { addPostActionCreator, addPostTextActionCreator } from '../../../../../redux/profileReducer';
import NewPost from './NewPost';


const NewPostContainer = (props) => {

   const addPost = () => {
      props.store.dispatch(addPostActionCreator());
   }

   const onPostTextChange = (newPostText) => {
      props.store.dispatch(addPostTextActionCreator(newPostText));
   };

   return (
      <NewPost addPost={addPost} onPostTextChange={onPostTextChange} newPostText={props.store.getState().profilePage.newPostText} />
   )
}

export default NewPostContainer;