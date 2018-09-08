import React from 'react';

export default function(props) {
  return (
    <aside className="call-to-action code-background text-white">
      <div className="container text-center">
        <h3>{props.children}</h3>
      </div>
    </aside>
  );
}
