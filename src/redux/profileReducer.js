const ADDPOST = 'ADD-POST';
const ADDPOSTTEXT = 'ADD-POST-TEXT';

let initialState = {
   posts: [
      { id: '1', message: 'Hello', likesCount: '21' },
      { id: '2', message: 'The weather is so hot', likesCount: '3' },
      { id: '3', message: 'How are u doin guys', likesCount: '1' },
      { id: '4', message: 'Privet', likesCount: '15' },
   ],
   friends: [
      { id: 1, src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hawtcelebs.com%2Fwp-content%2Fuploads%2F2018%2F03%2Fadelaide-kane-at-beautiful-people-show-at-paris-fashion-week-03-06-2018-2.jpg&f=1&nofb=1" },
      { id: 2, src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F05%2F13%2F334355-people-model-fashion-forest-dress-portrait.jpg&f=1&nofb=1" },
      { id: 3, src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.businessinsider.com%2Fimage%2F52a5eabc69bedd1379312cf4%2Fimage.jpg&f=1&nofb=1" },
   ],
   newPostText: "",
}

export const profileReducer = (state = initialState, action) => {
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