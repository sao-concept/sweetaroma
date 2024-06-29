import React from "react";
import PurchaseHistoryProvider from "../../contextAPI/PurchaseHistoryContextAPI";

const PurchaseHistoryProviderComponent = ({ children }) => {
  return <PurchaseHistoryProvider>{children}</PurchaseHistoryProvider>;
};

export default PurchaseHistoryProviderComponent;
