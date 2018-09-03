import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { OutLink } from './BUI';

export default function() {
  return (
    <ScrollableAnchor id="footerScroll">
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <OutLink href="https://www.linkedin.com/in/bob-palmer-49b066ba">
                    <i className="fa fa-linkedin fa-fw fa-3x text-primary"></i>
                  </OutLink>
                </li>
                <li className="list-inline-item">
                  <OutLink href="https://github.com/the0bob">
                    <i className="fa fa-github fa-fw fa-3x text-primary"></i>
                  </OutLink>
                </li>
                <li className="list-inline-item">
                  <OutLink href="https://www.facebook.com/bntrain">
                    <i className="fa fa-facebook fa-fw fa-3x text-primary"></i>
                  </OutLink>
                </li>
              </ul>
              <hr className="small" />
              <p className="text-muted">Copyright &copy; Bob Jobs, LLC 2017</p>
            </div>
          </div>
        </div>
        <a id="to-top" href="#top" className="btn btn-dark btn-lg">
          <i className="fa fa-chevron-up fa-fw fa-1x"></i>
        </a>
      </footer>
    </ScrollableAnchor>
  );
}
