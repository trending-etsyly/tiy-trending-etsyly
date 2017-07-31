import React, { Component } from 'react';
import '../styles/App.css';


// import page (parent) component: all child components are imported via Trending.
import Trending from './Trending.js'


class App extends Component {
  render() {
    return (
      <div className="App">
         <Trending />
      </div>
    );
  }
}

export default App;
