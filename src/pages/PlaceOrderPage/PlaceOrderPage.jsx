import React, { useContext } from "react";
import "./PlaceOrderPage.scss";
import { StoreContext } from "../../contextAPI/StoreContextAPI";

function PlaceOrderPage() {
  const { getTotalCartCost } = useContext(StoreContext);

  return (
    <form className="place-order-comp">
      <div className="place-order-comp-left">
        <p className="place-order-title">Delivery Information</p>
        <div className="place-order-multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="place-order-multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="place-order-multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone number" />
      </div>
      <div className="place-order-comp-right">
        <div className="cart-page-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-page-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartCost()}</p>
            </div>
            <hr />
            <div className="cart-page-total-details">
              <p>Delivery Cost</p>
              <p>${getTotalCartCost() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-page-total-details">
              <b>Total Cost</b>
              <b>${getTotalCartCost() === 0 ? 0 : getTotalCartCost() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrderPage;
