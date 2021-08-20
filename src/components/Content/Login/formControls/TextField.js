import { ErrorMessage, Field, useField } from "formik";

const TextField = ({ label, ...props }) => {
   const [field] = useField(props);
   return (
      <div className={props.fieldWrapper}>
         <label htmlFor={field.name}>{label}</label>
         <Field as={props.as} {...field} {...props} />
         <ErrorMessage name={field.name}>
            {
               errorMsg => <div className='error'>{errorMsg}</div>
            }
         </ErrorMessage>
      </div>
   )
}

export default TextField
