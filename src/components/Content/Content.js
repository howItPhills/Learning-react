import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Videos from './Videos/Videos';
import Settings from './Settings/Settings';
import Music from './Music/Music';
import Profile from './Profile/Profile';
import { Route } from 'react-router-dom';


const Content = (props) => {
  return (
    <div className='app-wrapper-content'>
      <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
      <Route path='/profile' render={() => <Profile posts={props.posts} />} />
      <Route path='/news' component={News} />
      <Route path='/music' component={Music} />
      <Route path='/videos' component={Videos} />
      <Route path='/settings' component={Settings} />
    </div>
  );
}

export default Content;
