import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/globalComponents/Navbar";
import styled from "styled-components/macro";
import ClassesLanding from "../designAssets/Classes/Landing/Classes Landing.png";
import { AuthContext } from "../AuthContext";
import { db } from "../firebase";
import { CONSTANTS, FullScreenSection } from "../global";
import YourClasses from "./YourClasses";
import RedeemCode from "./RedeemCode";

let mappedElements;

function Profile() {
  const { userData } = useContext(AuthContext);

  return (
    <>
      <LandingSection>
        <Navbar isLogoWhite isWhite isCartWhite />
        <LandingBackground src={ClassesLanding} alt="Classes Landing" />
        <ContentContainerWrapper>
          <h1>Hello {userData?.firstName}!</h1>
        </ContentContainerWrapper>
      </LandingSection>

      <YourClasses />
      <RedeemCode />
    </>
  );
}

export default Profile;

const LandingSection = styled(FullScreenSection)`
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingBackground = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: 100%;
  z-index: -1;
`;

const ContentContainerWrapper = styled.div`
  width: 87%;
  height: calc(100% - 90px);
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${CONSTANTS.fosfore};
  font-family: "Century Gothic Bold";

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
  }
`;
