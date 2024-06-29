import React, { useContext } from "react";
import { StoreContext } from "../../contextAPI/StoreContextAPI";
import "./PurchaseHistoryPage.scss";
import { Link } from "react-router-dom";

function PurchaseHistoryPage() {
  const { purchaseHistory } = useContext(StoreContext);

  return (
    <div className="purchase-history-page">
      <h1>Purchase History</h1>
      {purchaseHistory.length === 0 ? (
        <>
          <p>You have no purchase history.</p>
          <Link to="/">
            <button>Click here to start purchase</button>
          </Link>
        </>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {purchaseHistory.map((purchase, index) => (
              <tr key={index}>
                <td>{purchase.productName}</td>
                <td>{purchase.quantity}</td>
                <td>${purchase.price}</td>
                <td>{new Date(purchase.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PurchaseHistoryPage;
