import './App.css';
import Content from './components/Content/Content'
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';




const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content state={props.state} addMessage={props.addMessage} addPost={props.addPost} addText={props.addText} addNewMessageText={props.addNewMessageText} />
    </div>
  );
}

export default App;