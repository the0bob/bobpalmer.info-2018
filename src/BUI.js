import React from 'react';
// import _ from 'lodash';
// import axios from 'axios';

export function OutLink(props) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
  );
}

export function CtaButton(props) {
  return (
    <a href={props.href} className="btn btn-dark btn-lg js-scroll-trigger" style={{marginTop:'16px', minWidth:'10em'}}>{props.children}</a>
  );
}

export function button(props) {
  return (<button
    className={props.className}
  />);
}

export function Spacer(props) {
  return (
    <aside className="call-to-action code-background text-white">
      <div className="container text-center">
        <h3>{props.children}</h3>
      </div>
    </aside>
  );
}
