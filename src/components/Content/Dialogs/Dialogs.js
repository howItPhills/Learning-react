import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';



const Dialogs = (props) => {

   let dialogsElement =
      props.dialogs.map(d => <Dialog name={d.name} id={d.id} />);

   let messagesElement =
      props.messages.map(m => <Message message={m.message} />);

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            {dialogsElement}
         </div>
         <div className={styles.messages}>
            {messagesElement}
         </div>
      </div>

   )
}

export default Dialogs;