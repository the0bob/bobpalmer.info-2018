import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { OutLink, CtaButton } from '../BUI/';

export default function() {
  return (
    <ScrollableAnchor id="about">
      <section className="about">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <img className="about-image" src="/img/profile.jpg" alt="Bob Palmer" />
            </div>
            <div className="col-md-8">
              <div>
                <p className="lead">
                  My name is Bob; motivated father, programmer, and lover of some things nerdy.
                </p>
                <p>
                  I received my Bachelor of Science studying Computer Science at <OutLink href="http://park.edu/">Park University</OutLink> in 2017. I am currently working as a Full Stack Developer at <OutLink href="https://www.sellozo.com/">Sellozo</OutLink>. In addition to building solutions from the ground up, I also have experience implementing requested features for legacy systems, fixing bugs, integrating 3rd party products, maintaining proprietary systems, and optimizing code. My work involves a variety of programming languages, data formats, and back end systems. I also have an interest in working with Expert Systems, Simulations, Games, or Artificial Intelligence applications.
                </p>
                <p>
                  I live on the south side of <OutLink href="http://rosedale.org/the-community/">Rosedale, KS</OutLink>. I share a small but cozy home with my amazing son. When I'm not working, I can be seen zipping around town on my <OutLink href="http://www.motorscooterguide.net/Kymco/People/People.html">Kymco People 50</OutLink>, having lunch at <OutLink href="https://www.yelp.com/biz/dagwoods-cafe-kansas-city">Dagwood's Cafe</OutLink>, watching the trains go by with my son at <OutLink href="http://www.unionstation.org/">Union Station</OutLink>, or catching up with friends over at <OutLink href="http://www.westportkc.com/places/buzzardbeach.php">Buzzard Beach</OutLink>. I am a pretty laid back guy, confident in my skills, and grateful for my friends and family.
                </p>
                <div className="clearfix"></div>
              </div>
              <div className="text-center">
              <div className="row">
                <div className="col-md-6">
                  <CtaButton href="#portfolio">
                    See Portfolio
                    <span className="m-1 fa fa-angle-down"></span></CtaButton>
                </div>
                <div className="col-md-6">
                  <CtaButton href="#contact">
                    Contact Me
                    <span className="m-1 fa fa-angle-down"></span>
                  </CtaButton>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}
