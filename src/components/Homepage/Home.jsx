import React from 'react';
import EducateSection from './EducateSection';
import EntrepreneursJourney from './EntrepreneursJourney';
import ThisMonth from './ThisMonth/ThisMonth';
import TheStars from './TheStars/TheStars';
function Home() {
  return (
    <>
        <ThisMonth  />
        <TheStars />
        <EntrepreneursJourney style={greyBg} /> 
        <EducateSection/>
    </>
  )
}

export default Home

const greyBg = { backgroundColor: '#ccc' };
