import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div id="home-banner">
        <div className="row">
          <div className="bn-left col-md-7">
            <p><img src="/images/banner.jpg" alt="banner" /></p>
            <div className="row">
              <div className="col-md-6 pr-0">
                <span><img src="images/banner-7.jpg" alt="" /></span>
              </div>
              <div className="col-md-6 pl-0">
                <span><img src="images/banner-8.jpg" alt="" /></span>
              </div>
            </div>
          </div>
          <div className="col-md-5 bn-deal">
            <div className="row">
              <div className="col-md-6 p-0">
                <span><img src="images/banner-1.jpg" alt="" /></span>
              </div>
              <div className="col-md-6 p-0">
                <span><img src="images/banner-2.jpg" alt="" /></span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 p-0">
                <span><img src="images/banner-3.jpg" alt="" /></span>
              </div>
              <div className="col-md-6 p-0">
                <span><img src="images/banner-4.jpg" alt="" /></span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 p-0">
                <span><img src="images/banner-5.jpg" alt="" /></span>
              </div>
              <div className="col-md-6 p-0">
                <span><img src="images/banner-6.jpg" alt="" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
