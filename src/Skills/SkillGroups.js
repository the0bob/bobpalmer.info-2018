import React from 'react';
import SkillGroup from './SkillGroup';

export default function(props) {
  return (
    <div className="row">
      {props.skills.map((skillGroup, index) => (
        <SkillGroup key={index} {...skillGroup}/>
      ))}
    </div>
  );
}
