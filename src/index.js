import React from 'react';
import ReactDOM from 'react-dom';
import { stack as Menu } from 'react-burger-menu';
import { configureAnchors } from 'react-scrollable-anchor'

import registerServiceWorker from './registerServiceWorker';
import { Spacer } from './components/BUI/';
import Header from './components/Header/';
import About from './components/About/';
import Skills from './components/Skills/';
import Portfolio from './components/Portfolio/';
import Contact from './components/Contact/';
import Footer from './components/Footer/';

import './styles/default.css';
import './styles/burger-menu.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    configureAnchors({offset: -60, scrollDuration: 200});
    registerServiceWorker();
  }

  render() {
    return (
      <div className="app" id="app">
        <Menu right>
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </Menu>
        <main id="page-wrap">
          <Header />
          <Spacer />
          <About />
          <Spacer />
          <Skills />
          <Spacer />
          <Portfolio />
          <Spacer />
          <Contact />
          <Spacer />
          <Footer />
        </main>
      </div>
    );
  } 
}

ReactDOM.render(
  <App />
  , document.getElementById('root'));
  
