import React from 'react';
import OutLink from './OutLink';

export default function(props) {
  let style = {};
  if (props.color) { style.color = props.color };
  return(
    <ul className="list-inline">
      <li className="list-inline-item">
        <OutLink href="https://www.linkedin.com/in/bob-palmer-49b066ba">
          <i className="fab fa-linkedin fa-fw fa-3x" style={style}></i>
        </OutLink>
      </li>
      <li className="list-inline-item">
        <OutLink href="https://github.com/the0bob">
          <i className="fab fa-github fa-fw fa-3x" style={style}></i>
        </OutLink>
      </li>
      <li className="list-inline-item">
        <OutLink href="https://codepen.io/the0bob/">
          <i className="fab fa-codepen fa-fw fa-3x" style={style}></i>
        </OutLink>
      </li>
      <li className="list-inline-item">
        <OutLink href="https://www.hackerrank.com/the0bob/">
          <i className="fab fa-hackerrank fa-fw fa-3x" style={style}></i>
        </OutLink>
      </li>
      <li className="list-inline-item">
        <OutLink href="https://www.facebook.com/bntrain">
          <i className="fab fa-facebook fa-fw fa-3x" style={style}></i>
        </OutLink>
      </li>

    </ul>
  );
}
