import React, { useState, useContext } from "react";
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
import StoreContextProvider, {
  StoreContext,
} from "../../contextAPI/StoreContextAPI";

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [userData, setUserData] = useState(null);
  const { getTotalCartCost } = useContext(StoreContext);

  return (
    <AuthProvider>
      <StoreContextProvider>
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
      </StoreContextProvider>
    </AuthProvider>
  );
}

export default App;
