import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cloud from './components/Cloud/Cloud';
import Content from './components/Content/Content'
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Preloader from './common/preloader';

import './App.css';

import { initializeApp } from './redux/app/appReducer';
import { selectIsInitialized } from './redux/app/app.selectors';


const App = () => {

  const isInitialized = useSelector(selectIsInitialized)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeApp());
    window.addEventListener('unhandledrejection', event => {
      alert(event.reason)
    })
    return () => {
      window.removeEventListener('unhandledrejection', event => {
        alert(event.reason)
      })
    }
  }, [dispatch])


  return (
    <>
      {
        isInitialized ?
          <div className='app-wrapper'>
            <Header />
            <Nav />
            <Content />
            <Cloud />
          </div> :
          <div className="app-preloader"><Preloader /></div >
      }
    </>

  )
}

export default App;