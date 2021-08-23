import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Preloader from './common/preloader';
import CloudContainer from './components/Cloud/CloudContainer';
import Content from './components/Content/Content'
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import { initializeApp } from './redux/appReducer';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.isInitialized) return <Preloader />
    return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <Content />
        <CloudContainer />
      </div>
    )
  }
}

const mapDispatchToProps = (state) => ({
  isInitialized: state.app.isInitialized
})

export default connect(mapDispatchToProps, { initializeApp })(App);