import React from 'react';
import EducateSection from './EducateSection';
import EntrepreneursJourney from './EntrepreneursJourney';
import ThisMonth from './ThisMonth/ThisMonth';

function Home() {
  return (
    <>
        <ThisMonth  />
        <EntrepreneursJourney style={greyBg} /> 
        <EducateSection/>
    </>
  )
}

export default Home

const greyBg = { backgroundColor: '#ccc' };
