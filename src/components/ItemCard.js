import React, { Component } from 'react';
// import '../styles/ItemCard.css'

const apiKey = "ja3evd3ncu2l2iji21q7m5qh";

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state= {imageUrl: "", loginName: ""}
  }
  componentDidMount() {
    console.log("props: ", this.props);
    fetch(`https://openapi.etsy.com/v2/listings/${this.props.listingId}/images?fields=url_170x135&api_key=${apiKey}`)
    .then(results => {
      console.log("results: ", results);
      return results.json();
    }).then(data => {
      console.log("data ", data);
    })
  }
  render() {
    return (
      <div className="ItemCard">
        <div className="cardImage">image placeholder</div>
        <div className="titlePriceRow">
          <div className="cardTitle">title placeholder</div>
          <div className="cardPrice">price placeholder</div>
        </div>
      </div>
    );
  }
}
