import React from "react";
import styled from "styled-components";
import {
  CONSTANTS,
  BasicLandingSection,
  FullScreenSection,
} from "../../global";
import ClassesLanding from "../../designAssets/Classes/Landing/Classes Landing.png";
// import EngArTitle from "../globalComponents/EngArTitle";
import Navbar from "../globalComponents/Navbar";
import WhiteLeftArrow from "../../designAssets/Classes/Landing/White Left Arrow.png";
import WhiteRightArrow from "../../designAssets/Classes/Landing/White Right Arrow.png";
import LandingCake from "./LandingCake";
import Carousel, { consts } from "react-elastic-carousel";

function Landing() {
  return (
    <LandingSection>
      <Navbar isLogoWhite isWhite isCartWhite />
      <LandingBackground src={ClassesLanding} alt="Classes Landing" />
      <ContentContainerWrapper>
        <Carousel itemsToShow={1} renderArrow={myArrow}>
          {/* <img src={WhiteLeftArrow} alt="White Left Arrow" /> */}
          <LandingCake 
            Title="Ahlan Bel Eid Cake Workshop"
            Subtitle="3D and 2D Figures Workshop"
            Date= "Saturday - Dec 3 - 2022"
            Time= "From 11:00 am till 2:00 pm"
            Place= "Hamra - The Olive Grove"
            WorkshopFees= "$70"
          />
          <LandingCake 
            Title="Summer Breeze Cake Workshop"
            Subtitle="Knife Coloring & Ikebana Tutorial"
            Date= "Saturday - Dec 10 - 2022"
            Time= "From 11:00 am till 2:00 pm"
            Place= "Hamra - The Olive Grove"
            WorkshopFees= "$50"
          />
          <LandingCake 
            Title="Crystal Sea Stone Cake Workshop"
            Subtitle="Crystal & Marble Effect"
            Date= "Saturday - Dec 15 - 2022"
            Time= "From 11:00 am till 2:00 pm"
            Place= "Hamra - The Olive Grove"
            WorkshopFees= "$100"
          />
          {/* <img src={WhiteRightArrow} alt="White Right Arrow" /> */}
        </Carousel>
      </ContentContainerWrapper>
    </LandingSection>
  );
}

export default Landing;

function myArrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? WhiteLeftArrow : WhiteRightArrow;
  return (
    <img
      src={pointer}
      onClick={onClick}
      disabled={isEdge}
      style={{
        width: "25px",
        height: "40px",
        cursor: "pointer",
        alignSelf: "center",
      }}
      alt="arrow"
    />
  );
}

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

  & .rec-arrow {
    border: none !important;
    outline: none !important;
    background: none;
  }

  & .rec-dot {
    display: none;
  }
`;
