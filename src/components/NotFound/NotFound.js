import React from 'react';
import './NotFound.css';
import broken from './images/imbroken.gif';

function NotFound(props) {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div>
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>
              <h3 className="description">Look like you're lost</h3>
              <div className="contant_box_404">
                <a href="./" className="link_404">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
