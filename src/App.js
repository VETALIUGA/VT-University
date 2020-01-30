import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Header from './components/containers/Header/Header';
import MainScreen from './components/containers/MainScreen/MainScreen';
import About from './components/containers/About/About';
import Services from './components/containers/Services/Services';
import Cases from './components/containers/Cases/Cases';
import CallToAction from './components/containers/CallToAction/CallToAction';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Header />
    <MainScreen />
    <About />
    <Services />
    <Cases />
    <CallToAction />
    </>
  );
}

export default App;
