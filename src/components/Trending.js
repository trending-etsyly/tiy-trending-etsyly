import React, { Component } from 'react';
import '../styles/Trending.css'
import '../styles/font-awesome-4.7.0/css/font-awesome.css'

// import child components
import Footer from './Footer.js'
import ItemCard from './ItemCard.js'

export default class Trending extends Component {
  render() {
    return (
      <div className="TrendingPage">
      <div className="Banner">
      <h2> Shop unique and handmade items directly from creative people around the world </h2>
      </div>
      <br></br>
      <h1><b> Popular items trending now</b></h1>
      <br></br>
      <ItemCard />
      <Footer />

      </div>
    );
  }
}
