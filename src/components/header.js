import React from "react";
import "../common/style/header.css";
import "../common/style/globalstyles.css";
import Bell from "../common/svg/bell";
import FileSymbol from "../common/svg/fileSymbol";
import UploadSymbol from "../common/svg/uploadSymbol";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <h3 className="headerText">
          <span>Upload CSV</span>
        </h3>

        <div className="bell-icon">
          <Bell />
        </div>
        <div className="user-profile">
          <img
            src="https://placekitten.com/40/40"
            alt="User Avatar"
            className="avatar"
          />
        </div>
      </header>
      <div className="fileSymbol">
        <FileSymbol />
        <div className="fileText"><p>Drop your excel sheets here or <span style={{color:"blue"}}>Browse</span> </p></div>
      </div>
      <button className="button"><UploadSymbol />Upload</button>
    </div>
  );
};

export default Header;
