import React from "react";
import AppNavbar from "./components/Navbar";
import Breadcramb from "./components/Breadcramb";
import "bootstrap/dist/css/bootstrap.min.css";
import Marquee from "./components/Marquee";
import "./page.module.css";
import AppFooter from "./components/AppFooter";
import "./main.css";

export default function template({ children }) {
  return (
    <>
      <AppNavbar />
      <Breadcramb />
      <Marquee />
      {children}
      <AppFooter />
    </>
  );
}
