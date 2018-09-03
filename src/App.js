import React from 'react';
import { Spacer } from './BUI';
import Menu from './Menu';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Menu />
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

export default App;
