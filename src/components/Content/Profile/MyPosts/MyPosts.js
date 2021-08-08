import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = React.memo(props => {

   const initialValues = {
      post: '',
   }

   const onSubmit = (values) => {
      props.addPost(values.post);
   }

   const validationSchema = yup.object({
      post: yup.string().required()
   })
   const postsElements =
      props.posts.map(p => <Post message={p.message} likes={p.likesCount} photos={props.photos} key={p.id} />)

   return (
      <div className={styles.wrapper}>
         <h3 className={styles.activities}>
            My activity
         </h3>
         <div className={styles.inputWrapper}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
               <Form>
                  <Field type='text' name='post' id='post' />
                  <button type='submit'>Send</button>
               </Form>
            </Formik>
         </div>
         {postsElements}
      </div>
   )
});

export default MyPosts;