import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Fixed from "./Fixed";

const Header = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      
    </>
  );
};

export default Header;
