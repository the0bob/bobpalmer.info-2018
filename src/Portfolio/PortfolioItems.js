import React from 'react';
import Slider from "react-slick";
import PortfolioItem from './PortfolioItem';

export default function (props) {
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
