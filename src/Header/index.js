import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { MainOutLinks } from '../BUI/';

export default function() {
  const style={
    'position': 'relative',
    'display': 'table',
    'width': '100%',
    'height': '100%',
    'backgroundColor': '#333',
    'background': `url(/img/header.jpg) no-repeat center center scroll`,
    'WebkitBackgroundSize': 'cover',
    'MozBackgroundSize': 'cover',
    'OBackgroundSize': 'cover',
    'backgroundSize': 'cover',
    'backgroundAttachment': 'fixed',
  }
  return (
    <ScrollableAnchor id="top">
      <header style={style}>
        <div className={"content"}>
          <h1>I'm Bob</h1>
          <h3>Full Stack Developer</h3>
          <br />
          <MainOutLinks />
          <br />
          <a href="#about" className="btn btn-dark btn-lg">
            Learn More
            <span className="m-1 fa fa-angle-down"></span>
          </a>
        </div>
      </header>
    </ScrollableAnchor>
  );
}
