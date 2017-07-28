import React, { Component } from 'react';
import '../styles/Trending.css'
import '../styles/font-awesome-4.7.0/css/font-awesome.css'

// import child components
import Footer from './Footer'
import ItemCard from './ItemCard'

const apiKey = "wta5sg99vllp9dr1b3xw5qc3";

export default class Trending extends Component {
   constructor(props) {
      super(props);

      this.pagesComponent = this.pagesComponent.bind(this);
      this.updatePage = this.updatePage.bind(this);
      this.fetchItems = this.fetchItems.bind(this);

      this.state = {
         page: "1",
         limit: "10",
         count: "0",
         products: [],
      }
   }

   fetchItems = () => {
     fetch(`https://openapi.etsy.com/v2/listings/trending?includes=MainImage(url_570xN),User(login_name)&fields=listing_id,user_id,title,price,url&limit=${this.state.limit}&page=${this.state.page}&api_key=${apiKey}`)
     .then(results => {
           return results.json();
         })
     .then(data => {
        let productList = data.results.map((product) => {
           return (
             <ItemCard key={product.listing_id} listingId={product.listing_id} userId={product.user_id} loginName={product.User.login_name} title={product.title} price={product.price} address={product.url} mainImage={product.MainImage.url_570xN} />
           )
       });
           this.setState({
              products: productList,
              count: data.count
           });
         })
     .catch((error) => {
         console.log("Error with Fetching : ", error);
      });
   }

   componentDidMount() {
      this.fetchItems();
   }

   updatePage = (event) => {
     event.preventDefault()
     this.setState({
       page: event.target.value
     });
     return this.fetchItems();
   }

   updateLimit = (event) => {
     event.preventDefault();
     this.setState({
       page: "1",
       limit: event.target.value
     });
     return this.fetchItems();
   }

   pagesComponent = () => {
    let numPages = Math.ceil(this.state.count/this.state.limit), pageButtons = []

    for (let n = 1; n <= numPages; n++) {
      pageButtons.push(<button className="linkButton" key={n} onClick={this.updatePage} value={n}>{n}</button>)
    }
     return (
       <div className="pages">
         {pageButtons}
       </div>
     )
   }

   limitComponent = () => {
     return (
       <div className="limit">
         <button className="linkButton" key="24" onClick={this.updateLimit} value="24">24</button>
         <button className="linkButton" key="48" onClick={this.updateLimit} value="48">48</button>
         <button className="linkButton" key="72" onClick={this.updateLimit} value="72">72</button>
         <button className="linkButton" key="96" onClick={this.updateLimit} value="96">96</button>
       </div>
     )
   }

  render() {
    return (
      <div className="TrendingPage">
         <div className="Banner">
            <h2> Shop unique and handmade items directly from creative people around the world </h2>
         </div>
         <h1><b> Popular items trending now</b></h1>
         <br></br>
         <div className="productsDiv">
           {this.state.products}
         </div>
         <div className="pageSelector">
           Page Selector: {this.pagesComponent()}
           Page Limit: {this.limitComponent()}
         </div>
         <Footer />
      </div>
    );
  }
}
