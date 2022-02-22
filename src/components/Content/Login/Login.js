import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

import styles from './Login.module.css';

import { login } from '../../../redux/auth/authReducer';

import TextField from "./formControls/TextField";
import { createStructuredSelector } from "reselect";
import { selectCaptcha, selectErrorMessage, selectIsAuthorized } from "../../../redux/auth/auth.selectors";

const LoginForm = ({ errorMessage, login, captcha, isAuthorized }) => {

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
      login(email, password, rememberMe, captcha);
   }

   if (isAuthorized) return  // checking authorization

   return (
      <>
         {isAuthorized ?
            <Redirect to='/profile' /> :
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
                        {captcha &&
                           <div className={styles.captcha}>
                              <img src={captcha} alt='captcha' />
                              <Field name='captcha' type='text' />
                           </div>}
                        {errorMessage &&
                           <div className={styles.errorMessage}>
                              {errorMessage}
                           </div>}
                     </div>
                     <button type="submit" className={styles.formButton}>Login</button>
                  </Form>
               </Formik>
            </div>
         }
      </>
   )
}

const mapStateToProps = createStructuredSelector({
   isAuthorized: selectIsAuthorized,
   errorMessage: selectErrorMessage,
   captcha: selectCaptcha,
})

export default connect(mapStateToProps, { login })(LoginForm)