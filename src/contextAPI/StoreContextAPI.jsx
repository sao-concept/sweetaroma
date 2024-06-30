import { createContext, useEffect, useState } from "react";
import { fetchFoods, fetchMenus } from "../config/apiService";

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [foodList, setFoodList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [cartItemsSelected, setCartItemsSelected] = useState({});
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const foods = await fetchFoods();
        const menus = await fetchMenus();

        // Ensure that each item includes a valid image path
        const updatedFoods = foods.map((food) => ({
          ...food,
          image: food.image || "/images/default_menu.png", // Provide a default image path if not available
        }));

        const updatedMenus = menus.map((menu) => ({
          ...menu,
          menu_image: menu.menu_image || "/images/default_menu.png", // Provide a default image path if not available
        }));

        setFoodList(updatedFoods);
        setMenuList(updatedMenus);
      } catch (error) {
        console.error("Failed to load data", error);
      }
    };
    loadData();
  }, []);

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
        const itemInformation = foodList.find(
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
    const itemInformation = foodList.find((product) => product._id === itemId);
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
    foodList,
    menuList,
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
