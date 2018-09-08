import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import skillsObj from '../data/skills.json';
import SkillGroups from './SkillGroups';

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
