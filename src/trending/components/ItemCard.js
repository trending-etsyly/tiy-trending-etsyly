import React, { Component } from 'react';
import '../styles/ItemCard.css'

export default class ItemCard extends Component {

  render() {
    return (
      <div className="ItemCard">
        <a href={this.props.address}>
          <div className="stuffff">
            <img className="cardImage" alt="Products sold on Etsy" src={this.props.mainImage}></img>
          </div>
          <div className="titlePriceRow">
            <div className="cardTitle">{this.props.title}</div>
              <div className="cardSellerPrice">
                <div className="seller">{this.props.loginName}</div>
                <div className="price">${this.props.price}</div>
              </div>
          </div>
        </a>
      </div>
    );
  }
}
