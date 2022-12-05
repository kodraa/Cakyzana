import React from 'react';
import EducateSection from './EducateSection';
import EntrepreneursJourney from './EntrepreneursJourney';
import Landing from './Landing/Landing';
import ThisMonth from './ThisMonth/ThisMonth';

function Home() {
  return (
    <>
        <Landing />
        <ThisMonth  />
        <EntrepreneursJourney /> 
        <EducateSection/>
    </>
  )
}

export default Home

