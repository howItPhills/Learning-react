import { sendMessage } from '../../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../../hoc/authHoc';
import * as yup from 'yup';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import InputField from '../../../assets/functions/withFormikField'
import { useEffect } from 'react';
import { dalAPI } from '../../../API/DalApi';


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


const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
   }
}

export default compose(withAuthRedirect, connect(mapStateToProps, {
   sendMessage,
}))(Dialogs);