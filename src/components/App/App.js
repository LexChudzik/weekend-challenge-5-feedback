import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Admin from '../Admin/Admin';
import Screen1 from '../Screen1/Screen1';
import Screen2 from '../Screen2/Screen2';
import Screen3 from '../Screen3/Screen3';
import Screen4 from '../Screen4/Screen4';
import Screen5 from '../Screen5/Screen5';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Route exact path="/" component={Screen1} />
        <Route path="/2" component={Screen2} />
        <Route path="/3" component={Screen3} />
        <Route path="/4" component={Screen4} />
        <Route path="/5" component={Screen5} />
        <Route path="/admin" component={Admin}/>
        <br/>
      </div>
      </Router>
    );
  }
}

export default App;
