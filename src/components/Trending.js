import React, { Component } from 'react';
import '../styles/Trending.css'

// import child components
import Footer from './Footer.js'
import ItemCard from './ItemCard.js'

const apiKey = "ja3evd3ncu2l2iji21q7m5qh";

export default class Trending extends Component {
   constructor(props) {
      super(props);
      this.state = {
         page: 1,
         limit: 20,
         count: 0,
         products: [],
      }
   }

   componentDidMount() {
      fetch('https://openapi.etsy.com/v2/listings/trending?limit=20&offset=0&page=1&api_key=ja3evd3ncu2l2iji21q7m5qh')
      .then(results => {
            return results.json();
          })
      .then(data => {
         let productList = data.results.map((product) => {
            return (
            <ItemCard key={product.listing_id} userId={product.user_id} title={product.title} price={product.price} /> )
         })
            this.setState({
               products: productList,
               count: data.count
            });
            console.log("state", this.state.products);
          })
      .catch((error) => {
          console.log("Error with Fetching : ", error);
       });
   }


  render() {
    return (
      <div className="TrendingPage">
      <div className="Banner"> place image and shop handmade quote here</div>
      <h1><b> Popular items trending now</b></h1>
      <br></br>
      {this.state.products}
      <Footer />
      </div>
    );
  }
}
