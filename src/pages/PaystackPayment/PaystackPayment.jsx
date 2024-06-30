import React, { useContext } from "react";
import "./PaystackPayment.scss";
import { useLocation, useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import { StoreContext } from "../../contextAPI/StoreContextAPI";
import { AuthContext } from "../../contextAPI/AuthContext";

function PaystackPayment() {
  const location = useLocation();
  const { formData, totalCost } = location.state || {};

  const navigate = useNavigate();
  const { setCartItemsSelected } = useContext(StoreContext);
  const { isAuthenticated } = useContext(AuthContext);

  if (!formData || !totalCost) {
    return <p>Invalid payment details. Please try again.</p>;
  }

  const PayWithPaystack = (event) => {
    event.preventDefault();
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_1cb7a0d7dd7f166af023d141043caafb8ff76acd",
      email: formData.email,
      amount: (totalCost + 2500) * 100, // amount in kobo
      callback: (response) => {
        alert(`Payment successful! Reference: ${response.reference}`);

        setCartItemsSelected({});
        // Redirect based on authentication status
        if (isAuthenticated) {
          navigate("/");
        } else {
          navigate("/");
        }
      },

      onSuccess(transaction) {
        let message = `
            Payment Completed!
            Reference ${transaction.reference}
            Thanks for your patronage
          `;
        alert(message);
      },

      onCancel() {
        alert("You have canceled the transaction!");
      },

      onClose: () => {
        alert("Payment window closed.");
      },
    });
  };

  return (
    <div className="paystack">
      <div className="paystack-header">
        <h1>Finalize Payment</h1>
      </div>
      <div className="paystack-form">
        <form id="paymentForm" className="">
          <div className="form-group">
            <label htmlFor="email">Email Address: </label>
            <input
              type="email"
              id="email-address"
              value={formData.email}
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount: </label>
            <input
              type="tel"
              id="amount"
              value={`₦${totalCost + 2500}`}
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="first-name">First Name: </label>
            <input
              type="text"
              id="first-name"
              value={formData.firstName}
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">Last Name: </label>
            <input
              type="text"
              id="last-name"
              value={formData.lastName}
              disabled
            />
          </div>

          <div className="form-submit">
            <button type="submit" onClick={PayWithPaystack}>
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaystackPayment;
