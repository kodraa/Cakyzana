import React from 'react';
import ForCakes from './ForCakes';
import ForCoverage from './ForCoverage';
import ForFondants from './ForFondants';
import ForMeasuring from './ForMeasuring';
import ForPiping from './ForPiping';
import Landing from './Landing';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';



function Utensils() {
  return (
    <>
        <Navbar isLogoWhite={true} isCartWhite={true} isWhite={true} />
        <Landing />
        <ForFondants/>
        <ForPiping isGrey={true}/>
        <ForMeasuring/>
        <ForCakes/>
        <ForCoverage/>
        <Footer/>
    </>
  )
}

export default Utensils
