import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import skillsObj from './data/skills.json';

function SkillGroup(props) {
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

function SkillGroups(props) {
  return (
    <div className="row">
      {props.skills.map((skillGroup, index) => (
        <SkillGroup key={index} {...skillGroup}/>
      ))}
    </div>
  );
}

export default function() {
  return (
    <ScrollableAnchor id="skills">
      <section className="skills text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 mx-auto">
              <h2>Skills </h2>
              <hr className="small" />
              <SkillGroups {...skillsObj}/>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}
