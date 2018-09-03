import React from 'react';
import ReactDOM from 'react-dom';
// import ReactBootstrap from 'react-bootstrap';
import { scaleRotate as Menu } from 'react-burger-menu';
import { configureAnchors } from 'react-scrollable-anchor'
import registerServiceWorker from './registerServiceWorker';
import './styles/default.css';
import './styles/burger-menu.css';
import { Spacer } from './BUI';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

configureAnchors({offset: -60, scrollDuration: 200})

class Nav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right pageWrapId="page-wrap" outerContainerId="app">
        <a href="#top">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app" id="app">
        <Nav />
        <main id="page-wrap">
          <Header />
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
registerServiceWorker();
