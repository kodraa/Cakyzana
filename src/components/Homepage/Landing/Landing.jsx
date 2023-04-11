import React from "react";
import styled from "styled-components/macro";
import {
  BasicLandingSection,
  CONSTANTS,
  FullScreenSection,
} from "../../../global";
import Navbar from "../../globalComponents/Navbar";
import MaskGroup3 from "../../../designAssets/Homepage/Landing/MaskGroup3.png";
import LandingMobile from "../../../designAssets/Homepage/Landing/LandingMobile.png";

// todo arabic titles spacing

function Landing() {
  return (
    <LandingSection>
      {/* <Navbar /> */}
      {window.innerWidth > 768 ? (
        <Image src={MaskGroup3} />
      ) : (
        <MobileImg src={LandingMobile} />
      )}
    </LandingSection>
  );
}

export default Landing;

const LandingSection = styled(FullScreenSection)`
  /* background-image: url(${MaskGroup3});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${CONSTANTS.purpleActive}; */
  background-color: ${CONSTANTS.purpleActive};
`;

const Image = styled.img`
  /* height: 100%; */
  width: 100%;
  object-fit: cover;
`;

const MobileImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
