import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';



const Dialogs = () => {
   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            <Dialog name='Igor' id='1' />
            <Dialog name='Lena' id='2' />
            <Dialog name='Vasya' id='3' />
            <Dialog name='Katya' id='4' />
         </div>
         <div className={styles.messages}>
            <Message message="whats upp" />
            <Message message="hi" />
            <Message message="how old are u my friend" />
         </div>
      </div>

   )
}

export default Dialogs;