import { Redirect, Route } from 'react-router-dom';
import Login from './Login/Login';
import FindUsers from './FindUsers/FindUsers';
import Settings from './Settings/Settings';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';


const Content = () => {

  return (
    <div className='app-wrapper-content'>
      <Route exact path='/Learning-react' render={() => <Redirect to="/profile" />} />
      <Route path='/dialogs/:userId?' render={() => <Dialogs />} />
      <Route path='/profile/:userId?' render={() => <Profile />} />
      <Route path='/settings' render={() => <Settings />} />
      <Route path='/findusers' render={() => <FindUsers />} />
      <Route path='/login' render={() => <Login />} />
    </div>
  );
}

export default Content;