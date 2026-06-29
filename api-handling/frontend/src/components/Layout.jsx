import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Card from "./Card";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      {/* <Card /> */}
    </div>
  );
};

export default Layout;
