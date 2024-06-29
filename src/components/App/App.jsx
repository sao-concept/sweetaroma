import "./App.scss";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { Route, Routes } from "react-router-dom";
import FooterComponent from "../FooterComponent/FooterComponent";
import LoginPopupComponent from "../LoginPopupComponent/LoginPopupComponent";
import ScrollToTopComponent from "../ScrollToTopComponent/ScrollToTopComponent";
import WelcomeMessageComponent from "../WelcomeMessageComponent/WelcomeMessageComponent";
import PurchaseHistoryProviderComponent from "../PurchaseHistoryProviderComponent/PurchaseHistoryProviderComponent";
import PurchaseHistoryPage from "../../pages/PurchaseHistoryPage/PurchaseHistoryPage";

function App() {
  return (
    <>
      <div className="App">
        <NavbarComponent
          setShowLoginPage={setShowLoginPage}
          setUserData={setUserData}
        />

        {userData && (
          <>
            <WelcomeMessageComponent userData={userData} />
          </>
        )}
        <LoginPopupComponent
          setShowLoginPage={setShowLoginPage}
          setUserData={setUserData}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
        </Routes>
      </div>
      <ScrollToTopComponent />
      <FooterComponent />
    </>
  );
}

export default App;
