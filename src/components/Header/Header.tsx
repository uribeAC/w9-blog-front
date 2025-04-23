import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="page-title-container">
          <h1 className="page-title">Aliset comiendo por el mundo</h1>{" "}
          <img
            className="page-title__image page-title__image--animated"
            src="huevito.webp"
            alt="animated drawing of an egg pretending to be swimming"
            width={105}
            height={105}
          />
          <img
            className="page-title__image page-title__image--reduced-motion"
            src="huevito-prefered-motion.webp"
            alt="animated drawing of an egg pretending to be swimming"
            width={105}
            height={105}
          />
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
