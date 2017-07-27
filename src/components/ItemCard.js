import React, { Component } from 'react';
import '../styles/ItemCard.css'

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ItemCard">
        <div className="stuffff">
          <img className="cardImage" src={this.props.mainImage}></img>
        </div>
        <div className="titlePriceRow">
          <div className="cardTitle">{this.props.title}</div>
            <div class="cardSellerPrice">
              <div class="seller">{this.props.loginName}</div>
              <div class="price">{this.props.price}</div>
            </div>
        </div>
      </div>
    );
  }
}
