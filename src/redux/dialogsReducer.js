const ADDMESSAGE = 'ADD-MESSAGE';
const ADDNEWMESSAGETEXT = 'ADD-NEW-MESSAGE-TEXT';

let inintialState = {
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
}

export const dialogsReducer = (state = inintialState, action) => {
   switch (action.type) {
      case ADDMESSAGE: {
         let newMessage = {
            id: 5,
            message: state.valueMessage,
         }
         let copyState = { ...state };
         copyState.messages = [...state.messages]
         copyState.messages.push(newMessage);
         copyState.valueMessage = '';
         return copyState;
      }
      case ADDNEWMESSAGETEXT:
         let copyState = { ...state };
         copyState.valueMessage = action.text;
         return copyState;
      default:
         return state;
   }
}

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const addMessageTextActionCreator = (messageText) => ({ type: 'ADD-NEW-MESSAGE-TEXT', text: messageText });