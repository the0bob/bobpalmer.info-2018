import React from 'react';
import { OutLink } from '../BUI/';

export default function (props) {
  const background = `url(${props.img}) no-repeat center center`
  return (
    <div className="portfolio-item">
      <OutLink href={props.link}>
        <div className="img-portfolio" style={{
          background: background,
          backgroundSize: 'cover',
          width: '100%',
          height: '240px',
        }}>
          <h4>{props.title}</h4>
        </div>
      </OutLink>
      <div className="copy-portfolio" dangerouslySetInnerHTML={{__html: props.copy}}></div>
      <div className="cta-portfolio">
        <OutLink href={props.link}>
          <button className="btn btn-dark">{props.cta}</button>
        </OutLink>
      </div>
    </div>
  );
}
