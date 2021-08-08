import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';



const Dialogs = (props) => {

   const initialValues = {
      message: ''
   }

   const onSubmit = values => {
      props.sendMessage(values.message)
   }

   const validationSchema = yup.object({
      message: yup.string().required('Write a message'),
   })

   let dialogsElement =
      props.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);

   let messagesElement =
      props.messages.map(m => <Message message={m.message} key={m.id} />);

   // if (!props.isAuthorized) return <Redirect to="/login" />

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            {dialogsElement}
         </div>
         <div className={styles.messages}>
            {messagesElement}
         </div>
         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
               <Field type='text' name='message' id='message' />
               <button type='submit'>Send</button>
            </Form>
         </Formik>
      </div>

   )
}


export default Dialogs;