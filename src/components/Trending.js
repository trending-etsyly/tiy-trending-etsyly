import React, { Component } from 'react';
import '../styles/Trending.css'
import '../styles/font-awesome-4.7.0/css/font-awesome.css'

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
i
   componentDidMount() {
      fetch(` https://openapi.etsy.com/v2/listings/trending?fields=listing_id,user_id,title,price,url&limit=${this.state.limit}&page=${this.state.page}&api_key=${apiKey}`)
      .then(results => {
            return results.json();
          })
      .then(data => {
         let productList = data.results.map((product) => {
            return (
            <ItemCard key={product.listing_id} listingId={product.listing_id} userId={product.user_id} title={product.title} price={product.price}
            address={product.url}/> )
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
         <div className="Banner">
            <h2> Shop unique and handmade items directly from creative people around the world </h2>
         </div>
         <h1><b> Popular items trending now</b></h1>
         <br></br>
         {this.state.products}
         <Footer />
      </div>
    );
  }
}
