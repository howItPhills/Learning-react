import { Redirect, Route } from 'react-router-dom';
import Login from './Login/Login';
import Settings from './Settings/Settings';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import FindUsersContainer from './FindUsers/FindUsers.Container';


const Content = () => {

  return (
    <div className='app-wrapper-content'>
      <Route exact path='/Learning-react' render={() => <Redirect to="/profile" />} />
      <Route path='/profile/:userId?' render={() => <Profile />} />
      <Route path='/dialogs/:userId?' render={() => <Dialogs />} />
      <Route path='/settings' render={() => <Settings />} />
      <Route path='/findusers' render={() => <FindUsersContainer />} />
      <Route path='/login' render={() => <Login />} />
    </div>
  );
}

export default Content;