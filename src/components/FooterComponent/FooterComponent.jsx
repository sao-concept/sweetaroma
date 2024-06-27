import React from "react";
import "./FooterComponent.scss";
import { assets } from "../../assets/assets";

function FooterComponent() {
  return (
    <div className="footer-comp" id="footer-comp">
      <div className="footer-comp-contents">
        <div className="footer-comp-contents-left">
          <img src={assets.logo} alt="company logo" />
          <p>
            Immerse yourself in the culinary journey at SweetAroma, where every
            dish is a masterpiece of flavor and quality. From our diverse menu
            featuring expertly crafted dishes to the use of premium ingredients,
            we invite you to savor a dining experience that celebrates
            creativity and excellence in food.
          </p>
          <div className="footer-comp-social-icons">
            <img src={assets.facebook_icon} alt="facebook icon" />
            <img src={assets.twitter_icon} alt="twitter icon" />
            <img src={assets.linkedin_icon} alt="linkedin icon" />
          </div>
        </div>
        <div className="footer-comp-contents-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Food Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-comp-contents-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+234 00 000 000 00</li>
            <li>contact-us@sweetaroma.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-comp-copyright">
        Copyright 2024 &copy; sweetaroma.com - All Right Reserved.
      </p>
    </div>
  );
}

export default FooterComponent;
