import React from "react";
import styled from "styled-components";
import Navbar from "../globalComponents/Navbar";
import Footer from "../globalComponents/Footer";
import { CONSTANTS } from "../../global";
import Cart from "./Cart";
import Section from "../globalComponents/Section";

const CartPage = (props) => {
  return (
    <div style={{backgroundColor:CONSTANTS.graywhite}}>
      <Cart/>
      <Footer />
    </div>
  );
};
export default CartPage;



