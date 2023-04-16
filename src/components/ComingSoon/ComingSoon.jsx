import React from "react";
import styled from "styled-components/macro";
import EngArTitle from "../globalComponents/EngArTitle";
import backgroundImage from "../../designAssets/SignUp/background2.png";
import { CONSTANTS } from "../../global";

function ComingSoon() {
  return (
    <Section>
      <Subsection>
        {/* <Img src={backgroundImage} alt="background" /> */}
        <TitleContainer>
          <EngTitle
            arabic={"انطرونا جايينكن"}
            enColor={"white"}
            arColor={CONSTANTS.fosfore}
            bottom={"-70%"}
            right={"25%"}
          >
            {"Coming Soon!"}
          </EngTitle>
          {/* todo return to homepage */}
        </TitleContainer>
      </Subsection>
    </Section>
  );
}

export default ComingSoon;

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Subsection = styled.div`
  width: 85%;
  height: 85%;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`;

const Img = styled.img`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;

  /* top: 8%; */
  /* left: 8%; */
  /* top: 52.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: 85%; */
`;

const TitleContainer = styled.div`
  color: white;
  height: 18vh;
  width: max-content;
  display: flex;
  align-items: center;
  transform: ${(props) => props.isTransformed && "translateY(40px)"};

  /* height: 12rem; */
  /* width: 100%; */
  /* width: max-content; */
`;

const EngTitle = styled.h2`
  /* font-size: 3.125rem; */
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-family: "Century Gothic Bold", sans-serif;
  font-weight: normal;
  position: relative;
  /* border: 1px solid black; */
  /* font-size: 50px; */
  color: ${(props) => props.enColor};

  &:after {
    /* display: none; */
    content: "${(props) => props.arabic}";
    width: max-content;
    /* font-size: 2.75rem; */
    font-size: clamp(1.5rem, 5vw, 3rem);
    font-family: "Dima";
    font-weight: normal;
    /* font-size: 2.2rem; */
    position: absolute;
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    color: ${(props) => props.arColor};
  }
`;
