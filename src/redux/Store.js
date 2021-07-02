import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

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
         valueMessage: "",
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
         newPostText: "",
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
   dispatch(action) {
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._rerenderEntireTree(this._state);
   }
};



export default store;