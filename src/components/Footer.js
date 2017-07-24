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
               <li><a href="https://www.etsy.com/giftcards?ref=ftr">Gift Cards</a></li>
               <li><a href="https://blog.etsy.com/en/?ref=ftr">Etsy Blog</a></li>
               <li><a href="https://www.etsy.com/wholesale?ref=ftr">Wholesale</a></li>
            </ul>
            <ul className="sell">
               <li><h4>Sell</h4></li>
               <li><a href="https://www.etsy.com/sell?ref=ftr">Sell on Etsy</a></li>
               <li><a href="https://www.etsy.com/teams?ref=ftr">Teams</a></li>
               <li><a href="https://www.etsy.com/forums?ref=ftr">Forums</a></li>
            </ul>
            <ul className="about">
               <li><h4>About</h4></li>
               <li><a href="https://www.etsy.com/about?ref=ftr">Etsy, Inc.</a></li>
               <li><a href="https://www.etsy.com/legal?ref=ftr">Policies</a></li>
               <li><a href="https://investors.etsy.com/">Investors</a></li>
               <li><a href="https://www.etsy.com/careers?ref=ftr">Careers</a></li>
               <li><a href="https://www.etsy.com/press?ref=ftr">Press</a></li>
            </ul>
            <ul className="follow">
               <li><h4>Follow Etsy</h4></li>
               <li><a href="https://www.facebook.com/Etsy"><i class="fa fa-facebook-official" aria-hidden="true"></i>Facebook</a></li>
               <li><a href="https://www.instagram.com/etsy"><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</a></li>
               <li><a href="https://www.pinterest.com/etsy"><i class="fa fa-pinterest-p" aria-hidden="true"></i>Pinterest</a></li>
               <li><a href="https://www.twitter.com/etsy"><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
            </ul>
         </div>
         <hr></hr>
         <div className="meta-bottom">
            <div id="logo-and-slogan">
               <div id="logo">FILLER</div>
               <div id="slogan">We make it easy to find your thing.</div>
            </div>
            <div id="copyright"><light>© 2017 Etsy, Inc.</light></div>
            <div> Terms of Use </div>
            <div>Privacy</div>
            <div id="help-button">Help</div>
         </div>
      </div>
    );
  }
}
