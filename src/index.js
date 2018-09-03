import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { configureAnchors } from 'react-scrollable-anchor'
// import ReactBootstrap from 'react-bootstrap';
import './styles.css';
import { Spacer } from './BUI';
// import Menu from './Menu';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

configureAnchors({offset: -60, scrollDuration: 200})

class App extends React.Component {
  render() {
    return (
      <div className="app">
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
      </div>
    );
  }
}

ReactDOM.render(
  <App />
  , document.getElementById('root'));
registerServiceWorker();
