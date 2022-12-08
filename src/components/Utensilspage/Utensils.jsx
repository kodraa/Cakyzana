import React from 'react';
import ForCakes from './ForCakes';
import ForCoverage from './ForCoverage';
import ForFondants from './ForFondants';
import ForMeasuring from './ForMeasuring';
import ForPiping from './ForPiping';
import Landing from './Landing';
import Footer from '../globalComponents/Footer';



function Utensils() {
  return (
    <>
        <Landing />
        <ForFondants />
        <ForPiping/>
        <ForMeasuring/>
        <ForCakes/>
        <ForCoverage/>
        <Footer/>
    </>
  )
}

export default Utensils
