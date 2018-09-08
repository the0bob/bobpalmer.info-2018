import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { MainOutLinks } from '../BUI/'

export default function() {
  return (
    <ScrollableAnchor id="footerScroll">
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <MainOutLinks />
              <hr className="small" />
              <p className="text-muted">Copyright &copy; Bob Jobs, LLC 2017</p>
            </div>
          </div>
        </div>
      </footer>
    </ScrollableAnchor>
  );
}
