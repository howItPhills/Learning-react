import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const messageElement = React.createRef();


const Dialogs = (props) => {

   let sendMessage = () => {
      props.addMessage();
   }

   let changeMessage = () => {
      let messageText = messageElement.current.value;
      props.addNewMessageText(messageText)
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
         <input value={props.dialogsPage.valueMessage} onChange={changeMessage} ref={messageElement} />
         <button onClick={sendMessage}>Send</button>
      </div>

   )
}

export default Dialogs;