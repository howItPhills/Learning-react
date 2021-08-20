import SettingsContainer from './Settings/SettingsContainer';
import { Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import FindUsersContainer from './FindUsers/FindUsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import Login from './Login/Login';


const Content = () => {

  return (
    <div className='app-wrapper-content'>
      <Route path='/dialogs' render={() => <DialogsContainer />} />
      <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
      <Route path='/settings' render={() => <SettingsContainer />} />
      <Route path='/findusers' render={() => <FindUsersContainer />} />
      <Route path='/login' render={() => <Login />} />
    </div>
  );
}

export default Content;
