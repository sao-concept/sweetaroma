import "./App.scss";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { Route, Routes } from "react-router-dom";
import FooterComponent from "../FooterComponent/FooterComponent";

function App() {
  return (
    <>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/placeorderpage" element={<PlaceOrderPage />} />
        </Routes>
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
