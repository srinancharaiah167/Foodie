import React, { useContext } from "react";
import "./AppDownload.css";
import { assets } from "../../assets/frontend_assets/assets";
import { ThemeContext } from "../context/ThemeContext";

const AppDownload = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="appdownload" id="appdownload">
      <p>
        For Better Experience Download <br /> Foodie App
      </p>
      <div className="app-download-platforms">
        <img
          src={theme === "dark" ? assets.play_store_light : assets.play_store}
          alt=""
        />
        <img
          src={theme === "dark" ? assets.app_store_light : assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
