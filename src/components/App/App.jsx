import "./App.scss";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { Route, Routes } from "react-router-dom";
import FooterComponent from "../FooterComponent/FooterComponent";
import LoginPopupComponent from "../LoginPopupComponent/LoginPopupComponent";
import ScrollToTopComponent from "../ScrollToTopComponent/ScrollToTopComponent";
import WelcomeMessageComponent from "../WelcomeMessageComponent/WelcomeMessageComponent";
import { AuthProvider } from "../../contextAPI/AuthContext";
import PurchaseHistoryProviderComponent from "../PurchaseHistoryProviderComponent/PurchaseHistoryProviderComponent";
import PurchaseHistoryPage from "../../pages/PurchaseHistoryPage/PurchaseHistoryPage";

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [userData, setUserData] = useState(null);

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
    </AuthProvider>
  );
}

export default App;
