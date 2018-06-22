import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {

  componentWillMount() {
   axios.get('https://iss.moex.com/iss/securities.json?q=FXIT')
     .then(response => console.log(response))
    // axios.get('https://api.iextrading.com/1.0/stock/aapl/company')
    //   .then(response => console.log(response))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
