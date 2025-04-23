import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
