import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

function ContactForm() {
  return (
    <div className="col-lg-6 col-md-8 col-sm-10 mx-auto text-center">
      <h2>Contact Me</h2>
      <hr className="small" />
      <form className="mx-auto text-center">
        <div className="row">
          <div className="col-md-5">
            <p>
              <input type="text" placeholder="Name" required />
            </p><p>
              <input type="email" placeholder="Email" required />
            </p><p>
              <input type="phone" placeholder="Phone (optional)" />
            </p>
          </div>
          <div className="col-md-7">
            <textarea cols="40" rows="5" placeholder="What's on your mind?" required></textarea>
          </div>
          <div className="clearfix"></div>
          <div className="col-md-12 text-right">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

function ThankYou() {
  return (
    <div className="col-lg-6 col-md-8 col-sm-10 mx-auto text-center">
      <h2>Thank You</h2>
      <p>Your message has been sent!</p>
    </div>
  );
}
export default function() {
  return (
    <ScrollableAnchor id="contact">
    <section className="contact">
      <div className="container">
        <div className="row">
          <ContactForm />
        </div>
      </div>
    </section>
    </ScrollableAnchor>
  );
}
