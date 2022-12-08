import React from "react";
import styled from "styled-components";
import { BasicLandingSection, CONSTANTS, FullScreenSection } from "../../global";
import UtensilsLandingPage from "../../designAssets/Utensils/Landing/UtensilsLandingPage.png";

function Landing() {
  return (
    <LandingSection>
      <Image src={UtensilsLandingPage}/>
    </LandingSection>
  );
}

export default Landing;

const LandingSection = styled(FullScreenSection)`
  /* background-image: url(${UtensilsLandingPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${CONSTANTS.purpleActive}; */
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: 100%;
`
