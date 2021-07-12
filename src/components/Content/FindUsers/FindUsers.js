import User from './User/User';
import styles from './FindUsers.module.css'


const FindUsers = (props) => {
   let userElement = props.users.map(u => <User src={u.src} name={u.name} age={u.age} city={u.city} />)
   return (
      <div>
         <h2 className={styles.title}>Users to find, friends to meet</h2>
         {userElement}
      </div >
   )
}

export default FindUsers;