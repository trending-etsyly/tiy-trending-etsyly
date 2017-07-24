import React, { Component } from 'react';
import '../styles/App.css';

// import components
// import components
import Trending from './Trending.js'
import ItemCard from './ItemCard.js'
import Footer from './Footer.js'

// JSX REACT ELEMENTS. DROP IN BELOW WHEN NEEDED.
// <ItemCard />




class App extends Component {
  render() {
    return (
      <div className="App">
         <Trending />

         <Footer />

      </div>
    );
  }
}

export default App;
