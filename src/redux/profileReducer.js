const ADDPOST = 'ADD-POST';
const ADDPOSTTEXT = 'ADD-POST-TEXT';

export const profileReducer = (state, action) => {
   switch (action.type) {
      case ADDPOST:
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         }
         state.posts.push(newPost);
         state.newPostText = '';
         return state;
      case ADDPOSTTEXT:
         state.newPostText = action.text;
         return state;
      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const addPostTextActionCreator = (postText) => ({ type: 'ADD-POST-TEXT', text: postText });