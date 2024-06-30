import React, { useContext } from "react";
import "./ExploreMenuComponent.scss";
import { StoreContext } from "../../contextAPI/StoreContextAPI";

function ExploreMenuComponent({ categorylist, setCategorylist }) {
  const { menuList } = useContext(StoreContext);

  return (
    <div className="explore-menu-comp" id="explore-menu-comp">
      <h1>Explore our menu</h1>
      <p className="explore-menu-comp-text">
        Pick from a varied menu showcasing a mouthwatering assortment of dishes.
        Our goal is to fulfill your cravings and enhance your dining experience,
        one delightful meal at a time.
      </p>
      <div className="explore-menu-comp-list">
        {menuList.map((item, index) => (
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
              onError={(e) => (e.target.src = "/images/default_menu.jpg")} // Fallback image path
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenuComponent;
