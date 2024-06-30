import React, { useContext } from "react";
import "./FoodDisplayComponent.scss";
import { StoreContext } from "../../contextAPI/StoreContextAPI";
import FoodItemComponent from "../FoodItemComponent/FoodItemComponent";

function FoodDisplayComponent({ categorylist }) {
  const { foodList } = useContext(StoreContext);

  return (
    <div className="food-disp" id="food-disp">
      <h2>Popular dishes around you</h2>
      <div className="food-disp-list">
        {foodList.map((item, index) =>
          categorylist === "All" || categorylist === item.category ? (
            <FoodItemComponent
              key={index}
              id={item._id}
              description={item.description}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default FoodDisplayComponent;
