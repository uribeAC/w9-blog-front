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
            src="/gif-huevito-105.webp"
            alt="dibujo animado de un huevo frito haciendo ver que está nadando"
            width={105}
            height={105}
          />
          <img
            className="page-title__image page-title__image--reduced-motion"
            src="/img-huevito-105.webp"
            alt="dibujo de un huevo frito haciendo ver que está nadando"
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
