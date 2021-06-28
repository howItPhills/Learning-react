import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const messageElement = React.createRef();

const message = () => {
   let Message = messageElement.current.value;
   alert(Message);
}


const Dialogs = (props) => {
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
         <input placeholder="Message" ref={messageElement} />
         <button onClick={message}>Send</button>
      </div>

   )
}

export default Dialogs;