import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Navi from './components/Navi';
import Banner from './components/Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        <div className="row">
        <div className="col-md-3"><Navi /></div>
          <div className="col-md-9">
          <Banner />
          </div>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
