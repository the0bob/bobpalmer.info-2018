import React from 'react';
import { CtaButton } from '../BUI/';

export default function() {
  return (
    <div className="text-center">
      <div className="row">
        <div className="col-md-6">
          <CtaButton href="#portfolio">See Portfolio</CtaButton>
        </div>
        <div className="col-md-6">
          <CtaButton href="#contact">Contact Me</CtaButton>
        </div>
      </div>
    </div>
  );
}
