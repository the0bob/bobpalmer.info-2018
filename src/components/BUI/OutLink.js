import React from 'react';

export default function({href, children}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  );
}
