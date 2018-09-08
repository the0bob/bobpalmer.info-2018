import React from 'react';

export default function(props) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
  );
}
