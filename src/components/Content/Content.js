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
      <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.store.getState().dialogsPage} addNewMessageText={props.store.addNewMessageText.bind(props.store)} addMessage={props.store.addMessage.bind(props.store)} />} />
      <Route path='/profile' render={() => <Profile profilePage={props.store.getState().profilePage} addPost={props.store.addPost.bind(props.store)} addText={props.store.addText.bind(props.store)} />} />
      <Route path='/news' component={News} />
      <Route path='/music' component={Music} />
      <Route path='/videos' component={Videos} />
      <Route path='/settings' component={Settings} />
    </div>
  );
}

export default Content;
