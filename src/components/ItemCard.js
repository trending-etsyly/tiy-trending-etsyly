import React, { Component } from 'react';
// import '../styles/ItemCard.css'

const apiKey = "ja3evd3ncu2l2iji21q7m5qh";

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state= {imageUrl: "", loginName: ""}
  }
  componentDidMount() {
    // console.log("props: ", this.props);
    fetch(`https://openapi.etsy.com/v2/listings/${this.props.listingId}/images?fields=url_570xN&api_key=${apiKey}`)
    .then(results => {
      // console.log("results: ", results);
      return results.json();
    }).then(data => {
      // console.log("data ", data);
      this.setState({imageUrl: data.results[0].url_570xN})
      // console.log("this.state", this.state)
      console.log("image url: ", this.state.imageUrl);
    })
  }
  render() {
    return (
      <div className="ItemCard">
        <div className="cardImage"><img src={this.state.imageUrl} alt="product_image" /></div>
        <div className="titlePriceRow">
          <div className="cardTitle">{this.props.title}</div>
          <div className="cardPrice">{this.props.price}</div>
        </div>
      </div>
    );
  }
}
