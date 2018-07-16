import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Navi from './components/Navi';
import Banner from './components/Banner';
import Primary from './components/Primary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-3 navi-bar"><Navi /></div>
          <div className="col-md-9 banner-right">
            <Banner />
          </div>
          </div>
      </div>
      <Primary />
      </div>
    );
  }
}

export default App;
