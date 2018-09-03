import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Constants from './constants';
import { OutLink, CtaButton } from './BUI';


function AboutImg() {
  const src = `${Constants.cdnUrl}img/profile3-1.jpg`;
  return (
    <img className="about-image" src={src} alt="About Me" />
  );
};

function AboutText() {
  return (
    <div>
      <p className="lead">
        My name is Bob; motivated family man, punk rocker, programmer, and lover of some things nerdy. I am the sole owner, proprietor, and employee at Bob Jobs, LLC. I have been known to party from time to time.
      </p>
      <p>
        I received my Bachelor of Science studying Computer Science at <OutLink href="http://park.edu/">Park University</OutLink> in 2017. I am currently working as a developer at <OutLink href="https://www.builderdesigns.com/">Builder Designs</OutLink>. I spend a lot of time implementing requested features, fixing bugs, integrating 3rd party products, maintaining proprietary systems, and optimizing code. My work involves a variety of programming languages, data formats, and back end systems. I also have an interest in working with Expert Systems, Simulations, Games, or Artificial Intelligence applications.
      </p>
      <p>
        I live on the south side of <OutLink href="http://rosedale.org/the-community/">Rosedale, KS</OutLink>. I share a small but cozy home with the best woman I've ever known, our amazing son, and the worst cat. When I'm not working, I can be seen zipping around town on my <OutLink href="http://www.motorscooterguide.net/Kymco/People/People.html">Kymco People 50</OutLink>, having lunch with my family at <OutLink href="https://www.yelp.com/biz/dagwoods-cafe-kansas-city">Dagwood's Cafe</OutLink>, watching the trains go by with my son at <OutLink href="http://www.unionstation.org/">Union Station</OutLink>, or catching up with friends over at <OutLink href="http://www.westportkc.com/places/buzzardbeach.php">Buzzard Beach</OutLink>. I am a pretty laid back guy, confident in my skills, and grateful for my friends and family.
      </p>
      <div className="clearfix"></div>
    </div>
  );
}

function CtaButtons() {
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
