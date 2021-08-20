const ADDMESSAGE = 'ADD-MESSAGE';

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
}

export const dialogsReducer = (state = inintialState, action) => {
   switch (action.type) {
      case ADDMESSAGE: {
         let newMessage = {
            id: 4,
            message: action.message,
         }
         return {
            ...state,
            messages: [...state.messages, newMessage],
         };
      }
      default:
         return state;
   }
}

export const sendMessage = (message) => ({ type: 'ADD-MESSAGE', message });