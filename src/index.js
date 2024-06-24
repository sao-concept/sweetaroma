import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./contextAPI/StoreContextAPI.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
