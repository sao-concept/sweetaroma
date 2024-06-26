import "./App.scss";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      {/* <Routes>
        <Route path="/" element={<HomePage userData={userData} />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/placeorderpage" element={<PlaceOrderPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
