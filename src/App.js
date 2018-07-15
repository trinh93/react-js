import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Navi from './components/Navi';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navi />
      </div>
    );
  }
}

export default App;
