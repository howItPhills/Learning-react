import { connect } from "react-redux";
import LoginForm from './Login'
import { login } from '../../../redux/authReducer';


const mapStateToProps = (state) => {
   return state
}

export default connect(mapStateToProps,
   { login })(LoginForm)