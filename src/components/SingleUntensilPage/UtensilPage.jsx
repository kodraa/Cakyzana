import React from "react";
import SingleUntensil from "./SingleUtensil";
import Footer from "../globalComponents/Footer";
import Navbar from "../globalComponents/Navbar";
import BlackCakyzanaLogo from "../../designAssets/Star/Black Navbar Logo.png";
const UtensilPage = () => {
  return (
    <div>
      <Navbar logo={BlackCakyzanaLogo} />
      <SingleUntensil />
      <Footer />
    </div>
  );
};

export default UtensilPage;
