import { Formik, Form } from "formik";
import { connect } from "react-redux";
import * as Yup from 'yup';
import styles from './Login.module.css';
import { login } from '../../../redux/authReducer';
import { Redirect } from "react-router-dom";
import TextField from "./formControls/TextField";

const LoginForm = (props) => {

   const initialValues = {
      email: '',
      password: '',
      rememberMe: true,
   }

   const validationSchema = Yup.object({
      email: Yup.string().email().required('Required'),
      password: Yup.string().required('Required'),
   })

   const onSubmit = values => {
      const { email, password, rememberMe } = values;
      props.login(email, password, rememberMe);
   }

   if (props.isAuthorized) return <Redirect to='/profile' /> // checking authorization

   return (
      <div className={styles.wrapper}>
         <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
         >
            <Form name='form'>
               <div className={styles.fieldWrapper}>
                  <TextField label="Email" name="email" type="text" className='email' />
                  <TextField label="Password" name="password" type="password" className='password' />
                  <TextField label="Remember me" name="rememberMe" type="checkbox" className='checkbox' />
                  {props.errorMessage &&
                     <div className={styles.errorMessage}>
                        {props.errorMessage}
                     </div>}
               </div>
               <button type="submit" className={styles.formButton}>Login</button>
            </Form>
         </Formik>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      isAuthorized: state.auth.isAuthorized,
      errorMessage: state.auth.errorMessage,
   }
}

export default connect(mapStateToProps, { login })(LoginForm)
