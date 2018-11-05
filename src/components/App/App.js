import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Admin from '../Admin/Admin';
import Screen1 from '../Screen1/Screen1';
// import Screen2 from '../Screen2/Screen2';
// import Screen3 from '../Screen3/Screen3';
// import Screen4 from '../Screen4/Screen4';
// import Screen5 from '../Screen5/Screen5';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Admin />
        <Screen1 />
        {/* <Screen2 />
        <Screen3 />
        <Screen4 />
        <Screen5 /> */}
        <br/>
      </div>
    );
  }
}

export default App;
