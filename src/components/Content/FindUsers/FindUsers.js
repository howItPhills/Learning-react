import User from './User/User';
import styles from './User/User.module.css'


let FindUsers = (props) => {
   if (props.users.length === 0) {
      props.setUsers([
         { id: 1, followed: true, name: 'Sveta,', age: 25, city: 'Minsk', src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.materialicious.com%2Fimages%2Flifestyle-female-portrait-photography-by-alessandro-bondielli-o.jpg&f=1&nofb=1' },
         { id: 2, followed: false, name: 'Lena,', age: 22, city: 'Grodno', src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.materialicious.com%2Fimages%2Flifestyle-female-portrait-photography-by-alessandro-bondielli-o.jpg&f=1&nofb=1' },
         { id: 3, followed: true, name: 'Vika,', age: 23, city: 'Vitebsk', src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.materialicious.com%2Fimages%2Flifestyle-female-portrait-photography-by-alessandro-bondielli-o.jpg&f=1&nofb=1' },
      ]
      )
   }
   // console.log(props);

   // let userElement = props.users.map(u => <User src={u.src} name={u.name} age={u.age} city={u.city} followed={u.followed} id={u.id} />)
   return <div>
      <h2 className={styles.title}>Users to find, friends to meet</h2>
      {props.users.map(u =>
         <div className={styles.main} key={u.id}>
            <div className={styles.wrapper}>
               <div className={styles.user}>
                  <img src={u.src} className={styles.photo} />
                  {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button> : <button onClick={() => { props.follow(u.id) }}>follow</button>}
               </div>
               <div className={styles.description}>
                  <div className={styles.text}>{u.name}</div>
                  <div className={styles.text}>{u.age}</div>
                  <div className={styles.text}>{u.city}</div>
               </div>
            </div>
         </div >
      )}
   </div >
   // <div>
   //    {userElement}
   // </div >

}

export default FindUsers;