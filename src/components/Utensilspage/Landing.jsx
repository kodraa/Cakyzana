import React from "react";
import styled from "styled-components";
import { BasicLandingSection, CONSTANTS, FullScreenSection } from "../../global";
import Navbar from "../globalComponents/Navbar";
import UtensilsLandingPage from "../../designAssets/UtensilsPage/Landing/UtensilsLandingPage.png";

function Landing() {
  return (
    <LandingSection>
      <Navbar />
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
  object-fit: cover;
`
