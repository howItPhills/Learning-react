const ADDMESSAGE = 'ADD-MESSAGE';

let inintialState = {
   dialogs: [
      { id: '1', name: 'Igor', photo: null, 'last message': 'hi' },
      { id: '2', name: 'Lena', photo: null, 'last message': 'no' },
   ],
   postedMessages: [
      { id: '1', message: "hi" },
   ],
   recievedMessages: [
      { id: '1', message: "hello" },
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
            postedMessages: [...state.postedMessages, newMessage],
         };
      }
      default:
         return state;
   }
}

export const sendMessage = (message) => ({ type: 'ADD-MESSAGE', message });