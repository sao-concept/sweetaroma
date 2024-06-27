// src/contextAPI/StoreContextAPI.jsx

import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [cartItemsSelected, setCartItemsSelected] = useState({});
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("purchaseHistory")) || [];
    setPurchaseHistory(storedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem("purchaseHistory", JSON.stringify(purchaseHistory));
  }, [purchaseHistory]);

  function addToCartSelected(itemId) {
    setCartItemsSelected((prevCartItem) => ({
      ...prevCartItem,
      [itemId]: (prevCartItem[itemId] || 0) + 1,
    }));
  }

  function removeFromCartSelected(itemId) {
    setCartItemsSelected((prevCartItem) => {
      const updatedCart = { ...prevCartItem };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  }

  function getTotalCartCost() {
    return Object.entries(cartItemsSelected).reduce(
      (totalCost, [itemId, quantity]) => {
        const itemInformation = food_list.find(
          (product) => product._id === itemId
        );
        return (
          totalCost + (itemInformation ? itemInformation.price * quantity : 0)
        );
      },
      0
    );
  }

  function addPurchase(itemId, quantity) {
    const itemInformation = food_list.find((product) => product._id === itemId);
    if (itemInformation) {
      const newPurchase = {
        productName: itemInformation.name,
        quantity,
        price: itemInformation.price,
        date: new Date().toISOString(),
      };
      setPurchaseHistory((prevHistory) => [...prevHistory, newPurchase]);
    }
  }

  const contextValue = {
    food_list,
    cartItemsSelected,
    setCartItemsSelected,
    addToCartSelected,
    removeFromCartSelected,
    getTotalCartCost,
    addPurchase,
    purchaseHistory,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
