import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="banner-top">
            <img src="./images/banner-header.png" alt="banner" />
        </div>
        <header>
            <div className="top-promo">
                <div className="container">
                    <div className="row">
                        <div className="left col-md-3">
                            <a className="top-label"><i className="choicon icon-white"></i> Tiki App - Ưu đãi ngay trên tay</a>
                        </div>
                        <div className="right col-md-9">
                            <a className="top-label"><i className="choicon icon-gift-card"></i> Phiếu quà tặng</a>
                            <a className="top-label"><i className="choicon icon-fire"></i> Khuyến Mãi HOT</a>
                            <a className="top-label"><i className="choicon icon-plane-18"></i> Tiki Global - Mua hàng từ nước ngoài</a>
                            <a className="top-label"><i className="choicon icon-gotadi"></i> Đặt vé máy bay online</a>
                            <a className="top-label" ><i className="choicon icon-money_bag"></i> Bán hàng cùng Tiki</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-form-container">
                <div className="container">
                    <div className="row">
                        <div className="logo">
                            <a href="index"><img src="./images/logo.png" alt="logo" /></a>
                        </div>
                        <div className="form-search col-md-5">
                          <form id="search-form" method="get">
                            <div className="search-wrap">
                              <div className="flex">
                                <input type="text" name="search" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."/>
                              </div>
                              <button type="submit">
                                <i className="icon-search"></i>
                                <span>Tim kiem</span>
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="header-link">
                          <a className="tracking-order item">Theo dõi<br /> đơn hàng<i className="icon-style-1 icon-tracking"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;
