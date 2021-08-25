import { Field, Form, Formik } from "formik";


const InputField = ({ initialValues, onSubmit, validationSchema, ...props }) => {

   return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
         <Form>
            <Field as={props.as} type={props.type} name={props.name} placeholder={props.placeholder} />
            <button type='submit'>Send</button>
         </Form>
      </Formik>
   )
}

export default InputField


