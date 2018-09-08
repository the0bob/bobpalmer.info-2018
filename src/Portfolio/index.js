import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import portfolioObj from '../data/portfolio.json';
import PortfolioItems from './PortfolioItems';

export default function() {
  return (
    <ScrollableAnchor id="portfolio">
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto text-center">
              <h2>Portfolio</h2>
              <hr className="small" />
              <PortfolioItems {...portfolioObj} />
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}
