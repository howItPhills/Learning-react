import { Formik, Form, Field } from "formik";
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
      captcha: '',
   }

   const validationSchema = Yup.object({
      email: Yup.string().email().required('Required'),
      password: Yup.string().required('Required'),
   })

   const onSubmit = values => {
      const { email, password, rememberMe, captcha } = values;
      props.login(email, password, rememberMe, captcha);
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
                  {props.captcha &&
                     <div className={styles.captcha}>
                        <img src={props.captcha} alt='captcha' />
                        <Field name='captcha' type='text' />
                     </div>}
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
      captcha: state.auth.captcha,
   }
}

export default connect(mapStateToProps, { login })(LoginForm)