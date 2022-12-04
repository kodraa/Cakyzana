import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components";
import cake1 from "../../designAssets/Homepage/ThisMonth/cake1.png";
import cake2 from "../../designAssets/Homepage/ThisMonth/cake2.png";
import cake3 from "../../designAssets/Homepage/ThisMonth/cake3.png";
import cake4 from "../../designAssets/Homepage/ThisMonth/cake4.png";
import cake5 from "../../designAssets/Homepage/ThisMonth/cake5.png";

function ThisMonth() {
  return (
    <Section>
      <EngArTitle
        english={"This Month"}
        arabic={"اللي سبق شم الحبق"}
        bottom={"-95%"}
        right={"-120%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>
        <CircleCarouselContainer>
          <Circle data-index="0">
            <img src={cake1} alt="" />
          </Circle>
          <Circle data-index="1">
            <img src={cake2} alt="" />
          </Circle>
          <Circle data-index="2">
            <img src={cake3} alt="" />
            <HoverDiv>
              <h2>Eid Cake Workshop</h2>
              <div>
                <p>Date: Saturday, December 3, 2022</p>
                <p>Time: 11:00 am 2:00 pm</p>
                <p>Hamra, Beirut - The Olive Grove</p>
              </div>
              <WorkshopDescriptionDiv>
                <p>
                  In this workshop you will be learning how to bake a cake and
                  how to cover it with sugar dough, in addition to 3d techniques
                  and drawing a 2D character on a sugar dough.
                </p>
              </WorkshopDescriptionDiv>
              <CTAButton>Book a Seat NOW!</CTAButton>
            </HoverDiv>
          </Circle>
          <Circle data-index="3">
            <img src={cake4} alt="" />
          </Circle>
          <Circle data-index="4">
            <img src={cake5} alt="" />
          </Circle>
        </CircleCarouselContainer>
      </ContentDiv>
    </Section>
  );
}

export default ThisMonth;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
`;

const CircleCarouselContainer = styled.div`
  height: 433px;
  width: 100%;
  position: relative;
`;

const HoverDiv = styled.div`
  opacity: 0;
  color: white;
  position: absolute;
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  height: 90%;
  width: 90%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.5s ease;  
`;

const Circle = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  &[data-index="0"] {
    height: 210px;
    z-index: 1;
    top: 50%;
    right: 75%;
    translate: 25% -50%;
    background-color: ${CONSTANTS.purpleInactive};
  }

  &[data-index="1"] {
    height: 320px;
    z-index: 2;
    top: 50%;
    right: 65%;
    translate: 40% -50%;
    background-color: ${CONSTANTS.purpleSemiActive};
  }

  &[data-index="2"] {
    height: 433px;
    background-color: ${CONSTANTS.purpleActive};
    z-index: 3;
    left: 50%;
    translate: -50%
  }

  &[data-index="3"] {
    height: 320px;
    z-index: 2;
    top: 50%;
    left: 65%;
    translate: -40% -50%;
    background-color: ${CONSTANTS.purpleSemiActive};
  }

  &[data-index="4"] {
    height: 210px;
    z-index: 1;
    top: 50%;
    left: 75%;
    translate: -25% -50%;
    background-color: ${CONSTANTS.purpleInactive};
  }

  & img {
    height: 90%;
    width: 90%;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.1);
    transform-origin: center;
    transition: all 0.5s ease;  
  }

  &:hover img {
    opacity: 0.5;
    transition: all 0.5s ease;  
  }

  &:hover ${HoverDiv} {
    opacity: 1;
    transition: all 0.5s ease;  
  }
`;

const WorkshopDescriptionDiv = styled.div`
  width: 80%;
`

const CTAButton = styled.button`
background-color: ${CONSTANTS.yellow};`