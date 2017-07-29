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
      this.pageNavForward = this.pageNavForward.bind(this);
      this.pageNavBack = this.pageNavBack.bind(this);

      this.state = {
         page: "1",
         limit: "24",
         count: "0",
         products: [],
      }
   }

   fetchItems = () => {
     fetch(`https://openapi.etsy.com/v2/listings/trending?includes=MainImage(url_570xN),User(login_name),Shop(shop_name)&fields=listing_id,user_id,title,price,url&limit=${this.state.limit}&page=${this.state.page}&api_key=${apiKey}`)
     .then(results => {
           return results.json();
         })
     .then(data => {
        let productList = data.results.map((product) => {
         if (product.User) {
           return (
             <ItemCard key={product.listing_id} listingId={product.listing_id} userId={product.user_id} loginName={product.User.login_name} title={product.title} price={product.price} address={product.url} mainImage={product.MainImage.url_570xN} />
           )
         }
         else {
           return (
             <ItemCard key={product.listing_id} listingId={product.listing_id} userId={product.user_id}  title={product.title} price={product.price} address={product.url}  />
           )
         }

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
// ------------------------------------
   pageNavForward = (event) => {
     event.preventDefault()
     var pgToNum = Number(this.state.page) + 1;
     var newPg = String(pgToNum);
     this.setState({
       page: newPg,
     });
     return this.fetchItems();
   }

   pageNavBack = (event) => {
     event.preventDefault()
     var pgToNum = Number(this.state.page) - 1;
     var newPg = String(pgToNum);
     this.setState({
       page: newPg,
     });
     return this.fetchItems();
   }

   pageNavArrows = () => {
      return (
         <div className="pageForwardBackward">
         <button className="pageNavArrows" key="-1" onClick={this.pageNavForward} value="<"> ◀︎ </button>
         <button className="pageNavArrows" key="+1" onClick={this.pageNavForward} value=">"> ▶︎ </button>
         </div>
      )
   }
// -----------------------------------


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

   //  NOTE: limited the number of page buttons rendering for aesthetic reasons
   // NOTE: the REAL ETSY renders 8 pages total, always... changing the scope/ range of pg numbers that are viewable/availbe as you navigate through.... I have not found out how to do this just yet. this just limits the # of buttons available. we can change this.
    for (let n = 1; n <= numPages && n <= 8; n++) {
      pageButtons.push(<button className="linkButton" key={n} onClick={this.updatePage} value={n}>{n}</button>)
    }
     return (
       <div className="pages">
         {pageButtons}<div className="fillerEllipse"> ... </div>
       </div>
     )
   }

   limitComponent = () => {
     return (
       <div className="limit">
          <div className="limitHeader"> Results Per Page: </div>
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
         <h1><b> Popular items for trending</b></h1>
         <br></br>
         <div className="productsDiv">
           {this.state.products}
         </div>
         <div className="pageSelector">
           {this.pagesComponent()}
           {this.pageNavArrows()}
            {this.limitComponent()}
         </div>
         <Footer />
      </div>
    );
  }
}
