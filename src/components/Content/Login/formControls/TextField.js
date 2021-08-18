import { ErrorMessage, useField } from "formik";
import styles from './TextField.module.css'

const TextField = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
      <div className={styles.field}>
         <label htmlFor={field.name} className={styles.label}>{label}</label>
         <input {...field} {...props} />
         <ErrorMessage name={field.name} className={styles.error}>
            {
               errorMsg => <div className={styles.error}>{errorMsg}</div>
            }
         </ErrorMessage>
      </div>
   )
}

export default TextField
