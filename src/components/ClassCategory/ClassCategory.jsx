import React from "react";
import CategoryComponent from "./CategoryComponent";
import CategoryComponent2 from "./CategoryComponent2";
import Footer from "../globalComponents/Footer";
import Navbar from "../globalComponents/Navbar";
import Landing from "./LandingPage";
import { CONSTANTS } from "../../global";

// todo arabic title color same as view more bgcolor

const ClassCategory = (props) => {
  return (
    <>
      <Navbar isRelative />
      <CategoryComponent />
      <Footer />
    </>
  );
};

export default ClassCategory;
