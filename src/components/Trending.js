import React, { Component } from 'react';
// import 'styles > make css if we need sep css file'

// import child components
import Footer from './Footer.js'
import ItemCard from './ItemCard.js'

export default class Trending extends Component {
  render() {
    return (
      <div className="TrendingPage">
      <div className="Banner"> place image and shop handmade quote here</div>
      <h1><b> Popular items trending now</b></h1>
      <br></br>
      <ItemCard />
      <Footer />
      </div>
    );
  }
}
