import React from 'react';
import EducateSection from './EducateSection';
import EntrepreneursJourney from './EntrepreneursJourney';
import Landing from './Landing/Landing';
import ThisMonth from './ThisMonth/ThisMonth';
import TheStars from './TheStars/TheStars';
function Home() {
  return (
    <>
        <Landing />
        <ThisMonth  />
        <EntrepreneursJourney /> 
        <TheStars />
        <EntrepreneursJourney /> 
        <EducateSection/>
    </>
  )
}

export default Home

