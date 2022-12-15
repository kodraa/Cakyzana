import React from 'react';
import ForCakes from './ForCakes';
import ForCoverage from './ForCoverage';
import ForFondants from './ForFondants';
import ForMeasuring from './ForMeasuring';
import ForPiping from './ForPiping';
import Landing from './Landing';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import { CONSTANTS } from '../../global';



function Utensils() {
  return (
    <>
        <Navbar isLogoWhite={true} isCartWhite={true} isWhite={true} />
        <Landing />
        <ForFondants cardBgColor={CONSTANTS.blue} isPadded={true}/>
        <ForPiping  cardBgColor={CONSTANTS.pink} isPadded={true} isGrey={true}/>
        <ForMeasuring cardBgColor={CONSTANTS.blue} isPadded={true}/>
        <ForCakes cardBgColor={CONSTANTS.pink} isPadded={true} isGrey={true}/>
        <ForCoverage cardBgColor={CONSTANTS.blue} isPadded={true}/>
        <Footer/>
    </>
  )
}

export default Utensils
