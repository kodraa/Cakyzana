import React from 'react';
import EducateSection from './EducateSection';
import EntrepreneursJourney from './EntrepreneursJourney';
import Landing from './Landing/Landing';
import ThisMonth from './ThisMonth/ThisMonth';
import Classes from './Classes/TheClasses';
import TheStars from './TheStars/TheStars';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import SignUp from '../SignUp/SignUp'

function Home() {
  return (
    <>
        <Navbar isHalfWhite isLogoWhite isCartWhite/>
        <Landing />
        <ThisMonth  />
        <Classes isGrey isWhite/>
        <TheStars />
        <EntrepreneursJourney isGrey />
        {/* <EducateSection /> */}
        <Footer />
    </>
  )
}

export default Home

