import React from "react";
import styled from "styled-components/macro";
import { BasicLandingSection, CONSTANTS, FullScreenSection } from "../../global";
import UtensilsLandingPage from "../../designAssets/Utensils/Landing/UtensilsLandingPage.png";
import UtensilsMobileLandingPage from "../../designAssets/Utensils/Landing/UtensilsMobileLandingPage.png";

function Landing() {
  return (
    <LandingSection>
      {window.innerWidth > 768 ? (
        <Image src={UtensilsLandingPage} />
      ) : (
        <MobileImg src={UtensilsMobileLandingPage} />
      )}
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
  /* height: 100%; */
  width: 100%;
  object-fit: 100%;
`;

const MobileImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
