import './App.css';
import Content from './components/Content/Content'
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Navbar/Nav';


const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Nav />
      <Content />
    </div>
  );
}

export default App;