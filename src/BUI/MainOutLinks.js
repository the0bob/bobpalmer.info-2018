import React from 'react';
import OutLink from './OutLink';

export default function(props) {
  let style = {};
  if (props.color) { style.color = props.color };
  return(
    <ul className="list-inline">
      <li className="list-inline-item">
        <OutLink href="https://www.linkedin.com/in/bob-palmer-49b066ba">
          <i className="fa fa-linkedin fa-fw fa-3x" style={style}></i>
        </OutLink>
      </li>
      <li className="list-inline-item">
        <OutLink href="https://github.com/the0bob">
          <i className="fa fa-github fa-fw fa-3x" style={style}></i>
        </OutLink>
      </li>
      <li className="list-inline-item">
        <OutLink href="https://codepen.io/the0bob/">
          <i className="fa fa-codepen fa-fw fa-3x" style={style}></i>
        </OutLink>
      </li>
      <li className="list-inline-item">
        <OutLink href="https://www.facebook.com/bntrain">
          <i className="fa fa-facebook fa-fw fa-3x" style={style}></i>
        </OutLink>
      </li>

    </ul>
  );
}
