import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import styles from './Login.module.css'

const initialValues = {
   email: '',
   password: '',
   rememberMe: true,
}


const validationSchema = Yup.object({
   email: Yup.string().required('Required'),
   password: Yup.string().required('Required'),
})

const LoginForm = (props) => {

   const onSubmit = values => {
      const { email, password, rememberMe } = values;
      props.login(email, password, rememberMe);
   }
   return (
      <div className={styles.wrapper}>
         <h1>Login, please, sir</h1>
         <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
         >
            <Form>
               <div>
                  <div><label htmlFor="email">Email</label></div>
                  <Field type="text" id='email' name='email' />
                  <ErrorMessage name='email' />
               </div>
               <div>
                  <div><label htmlFor="password">Password</label></div>
                  <Field type="text" id='password' name='password' />
                  <ErrorMessage name='password' />
               </div>
               <div>
                  <Field type="checkbox" name="rememberMe" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
               </div>
               <button type="submit">Login</button>
            </Form>
         </Formik>
      </div>
   )
}

export default LoginForm
