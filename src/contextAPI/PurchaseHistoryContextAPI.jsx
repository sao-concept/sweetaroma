import { createContext, useState } from "react";

export const PurchaseHistoryContext = createContext(null);

function PurchaseHistoryProvider(props) {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  const contextValue = {
    purchaseHistory,
    setPurchaseHistory,
  };

  return (
    <PurchaseHistoryContext.Provider value={contextValue}>
      {props.children}
    </PurchaseHistoryContext.Provider>
  );
}

export default PurchaseHistoryProvider;
