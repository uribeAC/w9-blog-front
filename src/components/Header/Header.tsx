import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <h1 className="page-title">Aliset comiendo por el mundo</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
