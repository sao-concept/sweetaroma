import React, { useContext } from "react";
import "./FoodItemComponent.scss";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../contextAPI/StoreContextAPI";

function FoodItemComponent({ id, name, price, description, image }) {
  const { cartItemsSelected, addToCartSelected, removeFromCartSelected } =
    useContext(StoreContext);

  return (
    <div className="food-item-comp">
      <div className="food-item-comp-img-container">
        <img src={image} alt="" className="food-item-comp-image" />

        {!cartItemsSelected[id] ? (
          <img
            src={assets.add_icon_white}
            alt="white add icon"
            className="add"
            onClick={() => addToCartSelected(id)}
          />
        ) : (
          <div className="food-item-comp-counter">
            <img
              src={assets.remove_icon_red}
              alt="red remove icon"
              onClick={() => removeFromCartSelected(id)}
            />
            <p>{cartItemsSelected[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="green add icon"
              onClick={() => addToCartSelected(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-comp-info">
        <div className="food-item-comp-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating stars" />
        </div>
        <p className="food-item-comp-desc">{description}</p>
        <p className="food-item-comp-price">₦{price}</p>
      </div>
    </div>
  );
}

export default FoodItemComponent;
