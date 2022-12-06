import React from 'react';
import EducateSection from './EducateSection';
import EntrepreneursJourney from './EntrepreneursJourney';
import Landing from './Landing/Landing';
import ThisMonth from './ThisMonth/ThisMonth';
import TheStars from './TheStars/TheStars';
import Footer from '../globalComponents/Footer';
function Home() {
  return (
    <>
        <Landing />
        <ThisMonth  />
        <EntrepreneursJourney /> 
        <TheStars />
        <EducateSection/>
        <Footer />
    </>
  )
}

export default Home

