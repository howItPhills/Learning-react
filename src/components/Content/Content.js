import SettingsContainer from './Settings/SettingsContainer';
import { Redirect, Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import Login from './Login/Login';
import FindUsers from './FindUsers/FindUsers';


const Content = () => {

  return (
    <div className='app-wrapper-content'>
      <Route exact path='/' render={() => <Redirect to="/profile" />} />
      <Route path='/dialogs' render={() => <DialogsContainer />} />
      <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
      <Route path='/settings' render={() => <SettingsContainer />} />
      <Route path='/findusers' render={() => <FindUsers />} />
      <Route path='/login' render={() => <Login />} />
    </div>
  );
}

export default Content;
