import React from 'react';

export default function({children}) {
  return (
    <aside className="call-to-action code-background text-white">
      <div className="container text-center">
        <h3>{children}</h3>
      </div>
    </aside>
  );
}
