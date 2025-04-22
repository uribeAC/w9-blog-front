import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
