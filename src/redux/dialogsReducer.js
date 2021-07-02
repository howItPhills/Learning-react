const ADDMESSAGE = 'ADD-MESSAGE';
const ADDNEWMESSAGETEXT = 'ADD-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {
   switch (action.type) {
      case ADDMESSAGE:
         let newMessage = {
            id: 5,
            message: state.valueMessage,
         }
         state.messages.push(newMessage);
         state.valueMessage = '';
         return state;
      case ADDNEWMESSAGETEXT:
         state.valueMessage = action.text;
         return state;
      default:
         return state;
   }
}

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const addMessageTextActionCreator = (messageText) => ({ type: 'ADD-NEW-MESSAGE-TEXT', text: messageText });