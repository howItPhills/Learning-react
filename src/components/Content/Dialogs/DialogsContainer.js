import { addMessageActionCreator, addMessageTextActionCreator } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {

   let sendMessage = () => {
      props.store.dispatch(addMessageActionCreator());
   }

   let changeMessage = (messageText) => {
      props.store.dispatch(addMessageTextActionCreator(messageText))
   }

   return (
      <Dialogs sendMessage={sendMessage} changeMessage={changeMessage} valueMessage={props.store.getState().dialogsPage.valueMessage} dialogs={props.store.getState().dialogsPage.dialogs} messages={props.store.getState().dialogsPage.messages} />
   )
}

export default DialogsContainer;