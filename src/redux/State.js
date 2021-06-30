const ADDMESSAGE = 'ADD-MESSAGE';
const ADDNEWMESSAGETEXT = 'ADD-NEW-MESSAGE-TEXT';
const ADDPOST = 'ADD-POST';
const ADDPOSTTEXT = 'ADD-POST-TEXT';

let store = {
   _state: {
      dialogsPage: {
         dialogs: [
            { id: '1', name: 'Igor' },
            { id: '2', name: 'Lena' },
            { id: '3', name: 'Vasya' },
            { id: '4', name: 'Katya' },
         ],
         messages: [
            { id: '1', message: "whats upp" },
            { id: '2', message: "hi" },
            { id: '3', message: "how old are u my friend" },
         ],
         valueMessage: "HeyHoIII",
      },

      profilePage: {
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
         newPostText: "Hi vasaaaa",
      },
   },
   _rerenderEntireTree() {
   },

   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._rerenderEntireTree = observer;
   },

   _addPost() {
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
         likesCount: 0,
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._rerenderEntireTree(this._state);
   },
   _addMessage() {
      let newMessage = {
         id: 5,
         message: this._state.dialogsPage.valueMessage,
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.valueMessage = '';
      this._rerenderEntireTree(this._state);
   },
   _addPostText(text) {
      this._state.profilePage.newPostText = text;
      this._rerenderEntireTree(this._state);
   },
   _addNewMessageText(text) {
      this._state.dialogsPage.valueMessage = text;
      this._rerenderEntireTree(this._state);
   },
   dispatch(action) {
      if (action.type === ADDPOST) {
         this._addPost();
      } else if (action.type === ADDMESSAGE) {
         this._addMessage();
      } else if (action.type === ADDPOSTTEXT) {
         this._addPostText(action.text)
      } else if (action.type === ADDNEWMESSAGETEXT) {
         this._addNewMessageText(action.text)
      }
   }
};

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const addMessageTextActionCreator = (messageText) => ({ type: 'ADD-NEW-MESSAGE-TEXT', text: messageText });

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const addPostTextActionCreator = (postText) => ({ type: 'ADD-POST-TEXT', text: postText });


export default store;