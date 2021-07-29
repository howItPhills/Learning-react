import News from './News/News';
import Videos from './Videos/Videos';
import Settings from './Settings/Settings';
import Music from './Music/Music';
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
      <Route path='/news' component={News} />
      <Route path='/music' component={Music} />
      <Route path='/videos' component={Videos} />
      <Route path='/settings' component={Settings} />
      <Route path='/findusers' render={() => <FindUsersContainer />} />
      <Route path='/login' render={() => <Login />} />
    </div>
  );
}

export default Content;
