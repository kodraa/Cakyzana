import React from 'react';
import EducateSection from './EducateSection';
import EntrepreneursJourney from './EntrepreneursJourney';
import Landing from './Landing/Landing';
import ThisMonth from './ThisMonth/ThisMonth';
import TheStars from './TheStars/TheStars';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';

function Home() {
  return (
    <>
        <Navbar isHalfWhite={true} isLogoWhite={true} isCartWhite={true}/>
        <Landing />
        <ThisMonth  />
        <TheStars />
        <EntrepreneursJourney isGrey={true} />
        <EducateSection />
        <Footer />
    </>
  )
}

export default Home

