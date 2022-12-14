import React from 'react';
import CategoryComponent from "./CategoryComponent";
import CategoryComponent2 from "./CategoryComponent2";
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import Landing from './LandingPage';

import { CONSTANTS } from '../../global';



const ClassCategory = (props) => {
      return (
    <>
        <Navbar isLogoWhite={true} isCartWhite={true} isWhite={true} />
        <Landing />
        <CategoryComponent/>
        <CategoryComponent2  cardBgColor={CONSTANTS.pink} isPadded={true} isGrey={true}/>

        <Footer/>
    </>
  )
}

export default ClassCategory;
