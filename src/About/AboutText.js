import React from 'react';
import { OutLink } from '../BUI/';

export default function() {
  return (
    <div>
      <p className="lead">
        My name is Bob; motivated family man, punk rocker, programmer, and lover of some things nerdy. I am the sole owner, proprietor, and employee at Bob Jobs, LLC. I have been known to party from time to time.
      </p>
      <p>
        I received my Bachelor of Science studying Computer Science at <OutLink href="http://park.edu/">Park University</OutLink> in 2017. I am currently working as a Full Stack Developer at <OutLink href="https://golocalinteractive.com/">Go Local Interactive</OutLink>. In addition to building solutions from the ground up, I also have experience implementing requested features for legacy systems, fixing bugs, integrating 3rd party products, maintaining proprietary systems, and optimizing code. My work involves a variety of programming languages, data formats, and back end systems. I also have an interest in working with Expert Systems, Simulations, Games, or Artificial Intelligence applications.
      </p>
      <p>
        I live on the south side of <OutLink href="http://rosedale.org/the-community/">Rosedale, KS</OutLink>. I share a small but cozy home with the best woman I've ever known, our amazing son, and the worst cat. When I'm not working, I can be seen zipping around town on my <OutLink href="http://www.motorscooterguide.net/Kymco/People/People.html">Kymco People 50</OutLink>, having lunch with my family at <OutLink href="https://www.yelp.com/biz/dagwoods-cafe-kansas-city">Dagwood's Cafe</OutLink>, watching the trains go by with my son at <OutLink href="http://www.unionstation.org/">Union Station</OutLink>, or catching up with friends over at <OutLink href="http://www.westportkc.com/places/buzzardbeach.php">Buzzard Beach</OutLink>. I am a pretty laid back guy, confident in my skills, and grateful for my friends and family.
      </p>
      <div className="clearfix"></div>
    </div>
  );
}
