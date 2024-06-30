import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import HomePage from "../../pages/HomePage/HomePage";
import CartPage from "../../pages/CartPage/CartPage";
import PlaceOrderPage from "../../pages/PlaceOrderPage/PlaceOrderPage";
import FooterComponent from "../FooterComponent/FooterComponent";
import LoginPopupComponent from "../LoginPopupComponent/LoginPopupComponent";
import ScrollToTopComponent from "../ScrollToTopComponent/ScrollToTopComponent";
import WelcomeMessageComponent from "../WelcomeMessageComponent/WelcomeMessageComponent";
import { AuthProvider } from "../../contextAPI/AuthContext";
import PurchaseHistoryProviderComponent from "../PurchaseHistoryProviderComponent/PurchaseHistoryProviderComponent";
import PurchaseHistoryPage from "../../pages/PurchaseHistoryPage/PurchaseHistoryPage";
import PaystackPayment from "../../pages/PaystackPayment/PaystackPayment";
import { StoreContext } from "../../contextAPI/StoreContextAPI";
import { useContext } from "react";

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [userData, setUserData] = useState(null);

  const { getTotalCartCost } = useContext(StoreContext);

  return (
    <AuthProvider>
      {showLoginPage && (
        <LoginPopupComponent
          setShowLoginPage={setShowLoginPage}
          setUserData={setUserData}
        />
      )}
      <div className="app">
        <NavbarComponent
          setShowLoginPage={setShowLoginPage}
          setUserData={setUserData}
        />
        {userData && (
          <>
            <WelcomeMessageComponent userData={userData} />
          </>
        )}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage userData={userData} />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/placeorderpage" element={<PlaceOrderPage />} />

            <Route
              path="/purchase-history"
              element={
                <PurchaseHistoryProviderComponent>
                  <PurchaseHistoryPage />
                </PurchaseHistoryProviderComponent>
              }
            />

            <Route
              path="/paystack-payment"
              element={
                <PaystackPayment getTotalCartCost={getTotalCartCost()} />
              }
            />
          </Routes>
        </div>
      </div>
      <ScrollToTopComponent />
      <FooterComponent />
    </AuthProvider>
  );
}

export default App;
