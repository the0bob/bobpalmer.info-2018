import React from 'react';
import axios from 'axios';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.ContactForm = this.ContactForm.bind(this);
    this.state = {
      formSubmitted: false,
      formDisabled: false,
      formData: {},
    };
  }
  async submitForm(event) {
    this.setState({...this.state, formDisabled: true});
    this.forceUpdate();
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      comments: data.get('comments'),
    };
    const response = await axios({
      url : 'https://hooks.zapier.com/hooks/catch/2516557/8m2iei/',
      method: 'POST',
      data: formData,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    });
    this.setState({...this.state, formSubmitted: true});
    this.forceUpdate();
    return response;
  }

  ContactForm(props) {
    if(!props.formSubmitted) {
      return (
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto text-center">
          <h2>Contact Me</h2>
          <hr className="small" />
          <form className="mx-auto text-center" onSubmit={this.submitForm}>
            <div className="row">
              <div className="col-md-5">
                <p>
                  <input type="text" name="name" placeholder="Name" required/>
                </p><p>
                  <input type="email" name="email" placeholder="Email" required/>
                </p><p>
                  <input type="phone" name="phone" placeholder="Phone (optional)"/>
                </p>
              </div>
              <div className="col-md-7">
                <textarea name="comments" cols="40" rows="5" placeholder="What's on your mind?" required></textarea>
              </div>
              <div className="clearfix"></div>
              <div className="col-md-12 text-right">
                <input type="submit" value="Submit" disabled={this.formDisabled} />
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto text-center">
          <h2>Thank You!</h2>
          <hr className="small" />
          <p>
            Your message has been sent!
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <ScrollableAnchor id="contact">
        <section className="contact">
          <div className="container">
            <div className="row">
              <this.ContactForm formSubmitted={this.state.formSubmitted} />
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}
