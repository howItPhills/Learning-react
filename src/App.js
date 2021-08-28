import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Preloader from './common/preloader';
import Cloud from './components/Cloud/Cloud';
import Content from './components/Content/Content'
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import { initializeApp } from './redux/appReducer';


const App = ({ initializeApp, isInitialized }) => {

  useEffect(() => {
    initializeApp()
  }, [])


  if (!isInitialized) return <div className="app-preloader"><Preloader /></div >
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content />
      <Cloud />
    </div>
  )
}

const mapDispatchToProps = (state) => ({
  isInitialized: state.app.isInitialized
})

export default connect(mapDispatchToProps, { initializeApp })(App);