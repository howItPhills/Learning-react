import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';



const Dialogs = () => {

   let dialogs = [
      { id: '1', name: 'Igor' },
      { id: '2', name: 'Lena' },
      { id: '3', name: 'Vasya' },
      { id: '4', name: 'Katya' },
   ];

   let messages = [
      { id: '1', message: "whats upp" },
      { id: '2', message: "hi" },
      { id: '3', message: "how old are u my friend" },
   ];

   let dialogsElement =
      dialogs.map(d => <Dialog name={d.name} id={d.id} />);

   let messagesElement =
      messages.map(m => <Message message={m.message} />);

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