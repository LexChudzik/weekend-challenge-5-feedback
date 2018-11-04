import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Admin from '../Admin/Admin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Admin />
        <br/>
      </div>
    );
  }
}

export default App;
