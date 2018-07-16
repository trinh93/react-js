import React, { Component } from 'react';

class Primary extends Component {
  render() {
    return (
      <div className="container">
        <div className="row home-primary-banner">
            <div className="col-md-3">
                <img src="images/bn-primary-1.jpg" alt="" />
            </div>
            <div className="col-md-3">
                <img src="images/bn-primary-2.jpg" alt="" />
            </div>
            <div className="col-md-3">
                <img src="images/bn-primary-3.jpg" alt="" />
            </div>
            <div className="col-md-3">
                <img src="images/bn-primary-4.jpg" alt="" />
            </div>
        </div>
      </div>
    );
  }
}

export default Primary;
