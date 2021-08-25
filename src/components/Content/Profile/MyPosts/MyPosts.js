import * as yup from 'yup';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import InputField from '../../../../assets/functions/withFormikField';


const MyPosts = React.memo(props => {

   const initialValues = {
      post: '',
   }

   const onSubmit = (values, { resetForm }) => {
      props.addPost(values.post);
      resetForm(initialValues);
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
            <InputField initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} type='text' name='post' as='textarea' placeholder='Write your thoughts...' />
         </div>
         {postsElements}
      </div>
   )
});

export default MyPosts;