import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <h1 className="page-title">Aliset comiendo por el mundo</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
