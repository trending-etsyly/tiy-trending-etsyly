import React, { Component } from 'react';
import '../styles/Footer.css'
// import logo from '../etsy.svg'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
         <div className="link-lists-top">
            <ul className="shop">
               <li><h4>Shop</h4></li>
               <li><a>Gift Cards</a></li>
               <li><a>Etsy Blog</a></li>
               <li><a>Wholesale</a></li>
            </ul>
            <ul className="sell">
               <li><h4>Sell</h4></li>
               <li><a>Sell on Etsy</a></li>
               <li><a>Teams</a></li>
               <li><a>Forums</a></li>
            </ul>
            <ul className="about">
               <li><h4>About</h4></li>
               <li><a>Etsy, Inc.</a></li>
               <li><a>Policies</a></li>
               <li><a>Investors</a></li>
               <li><a>Careers</a></li>
               <li><a>Press</a></li>
            </ul>
            <ul className="follow">
               <li><h4>Follow Etsy</h4></li>
               <li><a><i class="fa fa-facebook-official" aria-hidden="true"></i>Facebook</a></li>
               <li><a><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</a></li>
               <li><a><i class="fa fa-pinterest-p" aria-hidden="true"></i>Pinterest</a></li>
               <li><a><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
            </ul>
         </div>
         <hr></hr>
         <div className="meta-bottom">
            <div id="logo-and-slogan">
               <div id="logo">FILLER</div>
               <div id="slogan">We make it easy to find your thing.</div>
            </div>
            <div id="copyright">© 2017 Etsy, Inc.</div>
            <div> Terms of Use </div>
            <div>Privacy</div>
            <div id="help-button">Help</div>
         </div>
      </div>
    );
  }
}
