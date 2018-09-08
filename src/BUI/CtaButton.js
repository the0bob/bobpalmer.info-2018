import React from 'react';

export default function(props) {
  return (
    <a href={props.href} className="btn btn-dark btn-lg" style={{marginTop:'16px', minWidth:'10em'}}>{props.children}</a>
  );
}
