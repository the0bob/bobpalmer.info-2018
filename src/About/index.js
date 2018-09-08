import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import AboutImg from './AboutImg';
import AboutText from './AboutText';
import CtaButtons from './CtaButtons';

export default function() {
  return (
    <ScrollableAnchor id="about">
      <section className="about">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <AboutImg />
            </div>
            <div className="col-md-8">
              <AboutText />
              <CtaButtons />
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}
