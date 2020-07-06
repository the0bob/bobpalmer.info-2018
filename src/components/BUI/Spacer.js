import React from 'react';

/* https://www.wallpaperflare.com/programming-code-abstract-screen-of-software-developer-coder-wallpaper-enjhi */

export default function({children}) {
  const style={
    background: "url(/img/background.jpg) no-repeat center center scroll",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",/* Call to Action */
    padding: "50px 0",
  };

  return (
    <aside style={style} className="text-white">
      <div className="container text-center">
        <h3>{children}</h3>
      </div>
    </aside>
  );
}
