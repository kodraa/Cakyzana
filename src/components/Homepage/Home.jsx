import React from 'react';
import EducateSection from './EducateSection';
import EntrepreneursJourney from './EntrepreneursJourney';
import Landing from './Landing/Landing';
import ThisMonth from './ThisMonth/ThisMonth';
import TheStars from './TheStars/TheStars';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import WhiteCakyzanaLogo from '../../designAssets/Navbar/White Navbar Logo.png';

function Home() {
  return (
    <>
        <Navbar isWhite={true} logo={WhiteCakyzanaLogo}/>
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

