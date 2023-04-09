import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/globalComponents/Navbar";
import styled from "styled-components/macro";
import ClassesLanding from "../designAssets/Classes/Landing/Classes Landing.png";
import { AuthContext } from "../AuthContext";
import { db } from "../firebase";
import { FullScreenSection } from "../global";

function Profile() {
  const { userData } = useContext(AuthContext);


  return (
    <>
      <LandingSection>
        <Navbar isLogoWhite isWhite isCartWhite />
        <LandingBackground src={ClassesLanding} alt="Classes Landing" />
        <ContentContainerWrapper>
          <h1>{userData?.firstName}</h1>
        </ContentContainerWrapper>
      </LandingSection>
    </>
  );
}

export default Profile;

const LandingSection = styled(FullScreenSection)`
  position: relative;
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
  transform: translateY(90px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  & .rec-arrow {
    border: none !important;
    outline: none !important;
    background: none;
  }

  & .rec-dot {
    display: none;
  }
`;
