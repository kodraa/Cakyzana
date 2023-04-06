import React from "react";
import styled from "styled-components/macro";
import { BasicLandingSection, CONSTANTS, FullScreenSection } from "../../../global";
import Navbar from "../../globalComponents/Navbar";
import MaskGroup3 from "../../../designAssets/Homepage/Landing/MaskGroup3.png";

function Landing() {
  return (
    <LandingSection>
      {/* <Navbar /> */}
      <Image src={MaskGroup3}/>
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
  height: 100%;
  /* width: 100%; */
  object-fit: cover;
`