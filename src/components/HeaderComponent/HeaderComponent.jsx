import React from "react";
import "./HeaderComponent.scss";

function HeaderComponent() {
  return (
    <div className="header-comp">
      <div className="header-comp-contents">
        <h2>Order your favorite food right here</h2>
        <p>
          Select from a varied menu offering a mouthwatering selection of dishes
          made with top-quality ingredients and culinary skill. Our goal is to
          satisfy your hunger and enhance your dining experience, one delightful
          meal at a time.
        </p>
        <button>
          <a href="#explore-menu-comp">Check Out Our Menu</a>
        </button>
      </div>
    </div>
  );
}

export default HeaderComponent;
