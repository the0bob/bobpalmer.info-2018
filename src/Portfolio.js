import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { OutLink } from './BUI';
import portfolioObj from './data/portfolio.json';

function PortfolioItem(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="portfolio-item">
        <OutLink href={props.link}>
          <div className="img-portfolio">
            <img src={props.img} alt={props.title} />
          </div>
          <h4>{props.title}</h4>
        </OutLink>
        <div className="copy-portfolio">{props.copy}</div>
        <div className="cta-portfolio">
          <OutLink href={props.link}>
            <button className="btn btn-dark">{props.cta}</button>
          </OutLink>
        </div>
      </div>
    </div>
  );
}

function PortfolioItems(props) {
  return (
    <div className="row">
      {props.portfolio.map((portfolioItem, index) => (
        <PortfolioItem key={index} {...portfolioItem}/>
      ))}
    </div>
  );
}

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
