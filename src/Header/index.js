import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Constants from '../data/constants.json';
import { MainOutLinks } from '../BUI/';

export default function() {
  const style={
    'position': 'relative',
    'display': 'table',
    'width': '100%',
    'height': '100%',
    'backgroundColor': '#333',
    'background': `url(${Constants.cdnUrl}img/photo_bg-1-1.jpg) no-repeat center center scroll`,
    'WebkitBackgroundSize': 'cover',
    'MozBackgroundSize': 'cover',
    'OBackgroundSize': 'cover',
    'backgroundSize': 'cover',
    'backgroundAttachment': 'fixed',
  }
  return (
    <ScrollableAnchor id="top">
      <header className="header" style={style}>
        <div className="text-vertical-center">
          <h1>I'm Bob</h1>
          <h3>Full Stack Developer</h3>
          <br />
          <MainOutLinks color="white" />
          <br />
          <a href="#about" className="btn btn-dark btn-lg">Learn More</a>
        </div>
      </header>
    </ScrollableAnchor>
  );
}
