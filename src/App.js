import './App.css';
import Content from './components/Content/Content'
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content store={props.store} />
    </div>
  );
}

export default App;