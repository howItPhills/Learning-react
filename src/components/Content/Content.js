import DialogsContainer from './Dialogs/DialogsContainer'
import News from './News/News';
import Videos from './Videos/Videos';
import Settings from './Settings/Settings';
import Music from './Music/Music';
import Profile from './Profile/Profile';
import { Route } from 'react-router-dom';


const Content = (props) => {


  return (
    <div className='app-wrapper-content'>
      <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
      <Route path='/profile' render={() => <Profile store={props.store} />} />
      <Route path='/news' component={News} />
      <Route path='/music' component={Music} />
      <Route path='/videos' component={Videos} />
      <Route path='/settings' component={Settings} />
    </div>
  );
}

export default Content;
