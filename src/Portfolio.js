import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Slider from "react-slick";
import { OutLink } from './BUI';
import portfolioObj from './data/portfolio.json';

function PortfolioItem(props) {
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

function PortfolioItems(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '320px',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'portfolio-items',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: '240px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '30px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: '15px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: '0',
          slidesToShow: 1,
        }
      },
    ],
  };
  return (
    <Slider {...settings}>
      {props.portfolio.map((portfolioItem, index) => (
        <PortfolioItem key={index} {...portfolioItem}/>
      ))}
    </Slider>
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
