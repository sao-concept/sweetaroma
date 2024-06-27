import React, { useState } from "react";
import "./HomePage.scss";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import ExploreMenuComponent from "../../components/ExploreMenuComponent/ExploreMenuComponent";
import FoodDisplayComponent from "../../components/FoodDisplayComponent/FoodDisplayComponent";
// import AppDownloadComponent from "../../components/AppDownloadComponent/AppDownloadComponent";

function HomePage() {
  const [categorylist, setCategorylist] = useState("All");

  return (
    <div>
      <HeaderComponent />
      <ExploreMenuComponent
        categorylist={categorylist}
        setCategorylist={setCategorylist}
      />
      <FoodDisplayComponent categorylist={categorylist} />
      {/* <AppDownloadComponent /> */}
    </div>
  );
}

export default HomePage;
