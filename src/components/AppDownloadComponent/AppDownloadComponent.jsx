import React from "react";
import "./AppDownloadComponent.scss";
import { assets } from "../../assets/assets";

function AppDownloadComponent() {
  return (
    <div className="app-download-comp" id="app-download-comp">
      <p>
        For Enhanced Experience, Download <br />
        SweetAroma App Today.
      </p>
      <div className="app-download-comp-platforms">
        <img src={assets.play_store} alt="Google play-store" />
        <img src={assets.app_store} alt="Apple app-store" />
      </div>
    </div>
  );
}

export default AppDownloadComponent;
