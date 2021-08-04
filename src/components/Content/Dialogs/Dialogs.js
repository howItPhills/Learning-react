import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';



const Dialogs = (props) => {
   let sendMessage = () => {
      props.sendMessage();
   }

   let changeMessage = (e) => {
      let messageText = e.target.value;
      props.changeMessage(messageText);
   }

   let dialogsElement =
      props.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);

   let messagesElement =
      props.messages.map(m => <Message message={m.message} key={m.id} />);

   if (!props.isAuthorized) return <Redirect to="/login" />

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            {dialogsElement}
         </div>
         <div className={styles.messages}>
            {messagesElement}
         </div>
         <input value={props.valueMessage} onChange={changeMessage} className={styles.input} />
         <button onClick={sendMessage} className={styles.button}>Send</button>
      </div>

   )
}

export default Dialogs;