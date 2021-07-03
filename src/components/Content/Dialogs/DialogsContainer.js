import { addMessageActionCreator, addMessageTextActionCreator } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      valueMessage: state.dialogsPage.valueMessage,
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      sendMessage() {
         dispatch(addMessageActionCreator());
      },
      changeMessage(messageText) {
         dispatch(addMessageTextActionCreator(messageText));
      },
   }
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;