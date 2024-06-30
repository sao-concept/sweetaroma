import React, { useState, useContext } from "react";
import "./PlaceOrderPage.scss";
import { StoreContext } from "../../contextAPI/StoreContextAPI";
import { useNavigate } from "react-router-dom";

function PlaceOrderPage() {
  const { getTotalCartCost } = useContext(StoreContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentClick = (event) => {
    event.preventDefault();
    const form = event.target.closest("form");
    if (form.checkValidity()) {
      navigate("/paystack-payment", {
        state: { formData, totalCost: getTotalCartCost() },
      });
    } else {
      form.reportValidity();
    }
  };

  return (
    <form className="place-order-comp" onSubmit={handlePaymentClick}>
      <div className="place-order-comp-left">
        <p className="place-order-title">Delivery Information</p>
        <div className="place-order-multi-fields">
          <input
            type="text"
            placeholder="First name"
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last name"
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Street"
          required
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        <div className="place-order-multi-fields">
          <input
            type="text"
            placeholder="City"
            required
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="State"
            required
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="place-order-multi-fields">
          <input
            type="text"
            placeholder="Zip code"
            required
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Country"
            required
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="Phone number"
          required
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="place-order-comp-right">
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

          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrderPage;
