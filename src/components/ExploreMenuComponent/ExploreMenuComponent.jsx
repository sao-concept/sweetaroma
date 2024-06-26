// src/components/ExploreMenuComponent/ExploreMenuComponent.jsx

import React from "react";
import "./ExploreMenuComponent.scss";
import { menu_list } from "../../assets/assets";

function ExploreMenuComponent({ categorylist, setCategorylist }) {
  return (
    <div className="explore-menu-comp" id="explore-menu-comp">
      <h1>Explore our menu</h1>
      <p className="explore-menu-comp-text">
        Pick from a varied menu showcasing a mouthwatering assortment of dishes.
        Our goal is to fulfill your cravings and enhance your dining experience,
        one delightful meal at a time.
      </p>
      <div className="explore-menu-comp-list">
        {menu_list.map((item, index) => {
          return (
            <div
              className="explore-menu-comp-list-item"
              key={index}
              onClick={() =>
                setCategorylist((prevState) =>
                  prevState === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt="list item"
                className={categorylist === item.menu_name ? "active" : ""}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenuComponent;
