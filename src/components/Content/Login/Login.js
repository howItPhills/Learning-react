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
            <Form>
               <TextField label="Email" name="email" type="text" />
               <TextField label="Password" name="password" type="password" />
               <TextField label="Remember me" name="rememberMe" type="checkbox" />
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
