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
import { withRouter } from 'react-router';


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
      props.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} photo={d.photo} lastMessage={d['last message']} />);

   let postedMessagesElement =
      props.postedMessages.map(m => <div key={m.id} className={styles.postedMessages}>{m.message}</div>);
   let recievedMessagesElement =
      props.recievedMessages.map(m => <div key={m.id} className={styles.recievedMessages}>{m.message}</div>);


   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            {dialogsElement}
         </div>
         <div className={styles.messages}>
            {postedMessagesElement}
            {recievedMessagesElement}
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
      postedMessages: state.dialogsPage.postedMessages,
      recievedMessages: state.dialogsPage.recievedMessages,
   }
}

export default compose(withAuthRedirect, withRouter, connect(mapStateToProps, {
   sendMessage,
}))(Dialogs);