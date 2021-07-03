import { addPostActionCreator, addPostTextActionCreator } from '../../../../../redux/profileReducer';
import NewPost from './NewPost';
import StoreContext from './../../../../../StoreContext';


const NewPostContainer = () => {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               const addPost = () => {
                  store.dispatch(addPostActionCreator());
               }

               const onPostTextChange = (newPostText) => {
                  store.dispatch(addPostTextActionCreator(newPostText));
               };
               return <NewPost addPost={addPost} onPostTextChange={onPostTextChange} newPostText={store.getState().profilePage.newPostText} />
            }
         }
      </StoreContext.Consumer>
   )
}

export default NewPostContainer;