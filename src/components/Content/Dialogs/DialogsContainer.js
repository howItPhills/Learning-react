import { sendMessage } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../../hoc/authHoc';
import { compose } from 'redux';

const mapStateToProps = (state) => {
   return {
      valueMessage: state.dialogsPage.valueMessage,
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
   }
}



export default compose(withAuthRedirect, connect(mapStateToProps, {
   sendMessage,
}))(Dialogs);