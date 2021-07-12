import News from './News/News';
import Videos from './Videos/Videos';
import Settings from './Settings/Settings';
import Music from './Music/Music';
import Profile from './Profile/Profile';
import { Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import FindUsersContainer from './FindUsers/FindUsersContainer';


const Content = () => {

  return (
    <div className='app-wrapper-content'>
      <Route path='/dialogs' render={() => <DialogsContainer />} />
      <Route path='/profile' render={() => <Profile />} />
      <Route path='/news' component={News} />
      <Route path='/music' component={Music} />
      <Route path='/videos' component={Videos} />
      <Route path='/settings' component={Settings} />
      <Route path='/findusers' render={() => <FindUsersContainer />} />
    </div>
  );
}

export default Content;
