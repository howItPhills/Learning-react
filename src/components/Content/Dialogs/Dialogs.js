import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addMessageActionCreator, addMessageTextActionCreator } from '../../../redux/dialogsReducer';



const Dialogs = (props) => {


   let sendMessage = () => {
      props.dispatch(addMessageActionCreator());
   }

   let changeMessage = (e) => {
      let messageText = e.target.value;
      props.dispatch(addMessageTextActionCreator(messageText))
   }


   let dialogsElement =
      props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} />);

   let messagesElement =
      props.dialogsPage.messages.map(m => <Message message={m.message} />);

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            {dialogsElement}
         </div>
         <div className={styles.messages}>
            {messagesElement}
         </div>
         <input value={props.dialogsPage.valueMessage} onChange={changeMessage} className={styles.input} />
         <button onClick={sendMessage} className={styles.button}>Send</button>
      </div>

   )
}

export default Dialogs;