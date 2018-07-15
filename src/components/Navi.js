import React, { Component } from 'react';
import './Navi.css';

class Navi extends Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 left-menu">
          <ul>
            <li>
              <a><span className="icon-wrap"><i className="lv1-icon icon-main"></i></span> <span>Điện Thoại - Máy Tính Bảng</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

);
  }
}


export default Navi;
