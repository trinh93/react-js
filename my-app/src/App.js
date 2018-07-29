import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Navi from './components/Navi';
import Nav1i from './components/Nav1i';
import Banner from './components/Banner';
import Primary from './components/Primary';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Router history={hashHistory}>
          <Route path="/" component={Header}>
            <IndexRoute component={Navi}></IndexRoute>
            <Route path="/Navi" component={Nav1i}></Route>
          </Route>
        </Router>
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
