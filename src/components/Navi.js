import React, { Component } from 'react';
import './Navi.css';

class Navi extends Component {
  render() {
    return (
    
        <div className=" left-menu">
          <ul>
            <li>
              <a><span className="icon-wrap"><i className="lv1-icon icon-main"></i></span> <span>Điện Thoại - Máy Tính Bảng</span></a>
              <ul className="navibar">
                <li>
                  <span>Xu Hướng & Nổi Bật</span>
                </li>
                <li>
                  <a>Smartphone dưới 3 triệu</a>
                </li>
                <li>
                  <a>Điện thoại dưới 1 triệu</a>
                </li>
                <li>
                  <a>Điện thoại dưới 1 triệu</a>
                </li>
                <li>
                  <a>Điện thoại dưới 1 triệu</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
     

);
  }
}


export default Navi;
