import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as Yup from 'yup';
import styles from './Login.module.css';
import { login } from '../../../redux/authReducer';
import { Redirect } from "react-router-dom";



const LoginForm = (props) => {

   const initialValues = {
      email: '',
      password: '',
      rememberMe: true,
   }


   const validationSchema = Yup.object({
      email: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
   })

   const onSubmit = values => {
      const { email, password, rememberMe } = values;
      props.login(email, password, rememberMe);
   }

   if (props.isAuthorized) return <Redirect to='/profile' />
   return (
      <div className={styles.wrapper}>
         <h1>Login, please, sir</h1>
         <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
         >
            <Form>
               <div className={styles.field}>
                  <div><label htmlFor="email">Email</label></div>
                  <Field type="text" id='email' name='email' />
                  <ErrorMessage name='email'>
                     {
                        errorMsg => <div className={styles.error}>{errorMsg}</div>
                     }
                  </ErrorMessage>
               </div>
               <div className={styles.field}>
                  <div><label htmlFor="password">Password</label></div>
                  <Field type="password" id='password' name='password' />
                  <ErrorMessage name='password'>
                     {
                        (errorMsg) => <div className={styles.error}>{errorMsg}</div>
                     }
                  </ErrorMessage>
               </div>
               <div>
                  <Field type="checkbox" name="rememberMe" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
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
   }
}

export default connect(mapStateToProps, { login })(LoginForm)
