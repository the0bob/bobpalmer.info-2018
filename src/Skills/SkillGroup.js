import React from 'react';

export default function(props) {
  const favIconClasses = `fa ${props.faIcon} fa-stack-1x`;
  return (
    <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
      <div className="skill">
        <span className="fa-stack fa-4x">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className={favIconClasses} style={{
            color: '#007bff',
          }}></i>
        </span>
        <h4>
          <strong>{props.name}</strong>
        </h4>
        <ul>
          {props.items.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
