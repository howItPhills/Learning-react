import { Formik, Form, Field } from 'formik'
import TextField from '../Login/formControls/TextField';


const SettingsForm = ({ profileInfo, updateProfile, setEditMode }) => {
   const initialValues = {
      aboutMe: profileInfo.aboutMe,
      lookingForAJob: profileInfo.lookingForAJob,
      lookingForAJobDescription: profileInfo.lookingForAJobDescription,
      fullName: profileInfo.fullName,
      contacts: {
         facebook: profileInfo.contacts.facebook,
         website: profileInfo.contacts.website,
         vk: profileInfo.contacts.vk,
         twitter: profileInfo.contacts.twitter,
         instagram: profileInfo.contacts.instagram,
         youtube: profileInfo.contacts.youtube,
         github: profileInfo.contacts.github,
         mainLink: profileInfo.contacts.mainLink,
      }
   }
   const onSubmit = values => {
      updateProfile(values);
      setEditMode(false)
   }
   return (
      <div>
         <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
         >
            <Form>
               <TextField label="Full name:" name="fullName" type="text" fieldWrapper='fieldWrapper' />
               <TextField label="About me:" name="aboutMe" type="text" fieldWrapper='fieldWrapper' as='textarea' />
               <TextField label="Looking for a job:" name="lookingForAJob" type="checkbox" fieldWrapper='fieldWrapper' />
               <TextField label="Looking for a job description:" name="lookingForAJobDescription" type="text" fieldWrapper='fieldWrapper' as='textarea' />
               <span>Contacts:</span>
               {Object.keys(profileInfo.contacts).map(key => {
                  return <div className='contact'>
                     {key}: <Field name={'contacts.' + key} type="text" className='contactInput' />
                  </div>
               }
               )}
               <button type="submit" className='submitInfo'>Save</button>
            </Form>
         </Formik>
      </div>
   )
}

export default SettingsForm