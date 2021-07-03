import { addMessageActionCreator, addMessageTextActionCreator } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from './../../../StoreContext';

const DialogsContainer = () => {

   return (
      <StoreContext.Consumer>
         {
            (store) => {
               const sendMessage = () => {
                  store.dispatch(addMessageActionCreator());
               }
               const changeMessage = (messageText) => {
                  store.dispatch(addMessageTextActionCreator(messageText))
               }
               return <Dialogs
                  sendMessage={sendMessage}
                  changeMessage={changeMessage}
                  valueMessage={store.getState().dialogsPage.valueMessage}
                  dialogs={store.getState().dialogsPage.dialogs}
                  messages={store.getState().dialogsPage.messages} />
            }
         }

      </StoreContext.Consumer>
   )
}

export default DialogsContainer;