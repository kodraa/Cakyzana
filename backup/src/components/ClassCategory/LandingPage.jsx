import React from "react";
import styled from "styled-components/macro";
import { BasicLandingSection, CONSTANTS, FullScreenSection } from "../../global";
import Landing from "../../designAssets/ClassCategory/Landing.png";

function LandingPage() {
  return (
    <LandingSection>
      <Image src={Landing}/>
    </LandingSection>
  );
}

export default LandingPage;

const LandingSection = styled(FullScreenSection)`
/* background-image: url(${Landing});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${CONSTANTS.purpleActive}; */
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: 100%;
`
