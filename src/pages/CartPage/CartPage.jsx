import React, { useContext } from "react";
import "./CartPage.scss";
import { StoreContext } from "../../contextAPI/StoreContextAPI";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const {
    cartItemsSelected,
    foodList,
    removeFromCartSelected,
    getTotalCartCost,
  } = useContext(StoreContext);

  const navigatePage = useNavigate();

  return (
    <div className="cart-page">
      <div className="cart-page-items">
        <div className="cart-page-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodList.map((item, index) =>
          cartItemsSelected[item._id] > 0 ? (
            <>
              <div className="cart-page-items-title cart-page-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₦{item.price}</p>
                <p>{cartItemsSelected[item._id]}</p>
                <p>₦{item.price * cartItemsSelected[item._id]}</p>
                <p
                  className="cross-close"
                  onClick={() => removeFromCartSelected(item._id)}
                >
                  x
                </p>
              </div>
              <hr />
            </>
          ) : null
        )}
      </div>
      <div className="cart-page-bottom">
        <div className="cart-page-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-page-total-details">
              <p>Subtotal</p>
              <p>₦{getTotalCartCost()}</p>
            </div>
            <hr />
            <div className="cart-page-total-details">
              <p>Delivery Cost</p>
              <p>₦{getTotalCartCost() === 0 ? 0 : 2500}</p>
            </div>
            <hr />
            <div className="cart-page-total-details">
              <b>Total Cost</b>
              <b>₦{getTotalCartCost() === 0 ? 0 : getTotalCartCost() + 2500}</b>
            </div>
          </div>
          <button onClick={() => navigatePage("/placeorderpage")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-page-promocode">
          <div>
            <p>If you have a promo code, kindly enter it here</p>
            <div className="cart-page-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
