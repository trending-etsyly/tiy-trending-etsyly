import React, { Component } from 'react';
// import '../styles/ItemCard.css'

export default class ItemCard extends Component {
  render() {
    return (
      <div className="ItemCard">
        <div className="cardImage"><img>image placeholder</img></div>
        <div className="cardDescription">description placeholder</div>
        <div className="titlePriceRow">
          <div className="cardTitle">title placeholder</div>
          <div className="cardPrice">price placeholder</div>
        </div>
      </div>
    );
  }
}
