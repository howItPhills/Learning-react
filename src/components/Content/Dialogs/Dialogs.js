import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import * as yup from 'yup';
import InputField from '../../../assets/functions/withFormikField'


const Dialogs = (props) => {

   const initialValues = {
      message: ''
   }

   const onSubmit = (values) => {
      props.sendMessage(values.message)
   }

   const validationSchema = yup.object({
      message: yup.string().trim().required('Write a message'),
   })

   let dialogsElement =
      props.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);

   let messagesElement =
      props.messages.map(m => <Message message={m.message} key={m.id} />);


   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            {dialogsElement}
         </div>
         <div className={styles.messages}>
            {messagesElement}
         </div>
         <div className={styles.inputWrapper}>
            <InputField initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} as='textarea' name='message' placeholder='Type any message, my friend...' />
         </div>
      </div>

   )
}


export default Dialogs;