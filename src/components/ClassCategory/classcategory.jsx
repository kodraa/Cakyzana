import React from 'react';
import categorycomponent from "./categorycomponent";
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';



const classcategory = (props) => {
      return (
    <>
        <Navbar isLogoWhite={true} isCartWhite={true} isWhite={true} />
        <ForFondants/>
        <ForPiping isGrey={true}/>
        <ForMeasuring/>
        <ForCakes isGrey={true}/>
        <ForCoverage/>
        <Footer/>
    </>
  )
}

export default classcategory;
