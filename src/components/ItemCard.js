import React, { Component } from 'react';
import '../styles/ItemCard.css'

// const apiKey = "wta5sg99vllp9dr1b3xw5qc3";

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    // this.state= {imageUrl: "", loginName: ""}
  }
  // componentDidMount() {
  //   // console.log("props: ", this.props);
  //   fetch(`https://openapi.etsy.com/v2/listings/${this.props.listingId}/images?fields=url_570xN&api_key=${apiKey}`)
  //   .then(results => {
  //     // console.log("results: ", results);
  //     return results.json();
  //   }).then(data => {
  //     // console.log("data ", data);
  //     this.setState({imageUrl: data.results[0].url_570xN})
  //     // console.log("this.state", this.state)
  //     console.log("image url: ", this.state.imageUrl);
  //   })
  // }

  render() {
    // console.log('ImageURL:', imgUrl);
    return (
      <div className="ItemCard">
        <div className="stuffff">
          <img className="cardImage" src={this.props.mainImage}></img>
        </div>
        <div className="titlePriceRow">
          <div className="cardTitle">{this.props.title}</div>
          <div className="cardPrice">{this.props.price}</div>
        </div>
      </div>
    );
  }
}
// `background-image: url(${this.props.mainImage})`;
