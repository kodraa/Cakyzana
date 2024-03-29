import React, { useState } from "react";
import styled from "styled-components/macro";
import { CONSTANTS } from "../../../global";

function CircleElement(props) {
  const translation = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
  };

  return (
    // <Circle className={props.class}>
    <>
      {window.innerWidth > 768 ? (
        <>
          <Circle className={translation[props.index] + " desktop"}>
            <img src={props.src} alt="" />
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
        </>
      ) : (
        <>
          <Container>
            <Circle className={translation[props.index] + " mobile"}>
              <img src={props.src} alt="" className="mobile" />
            </Circle>
            <InfoDiv className="info">
              <h2>{props.title}</h2>
              <div>
                <p>Date: {props.date}</p>
                <p>Time: {props.time}</p>
                <p>{props.location}</p>
              </div>
              <WorkshopDescriptionDiv>
                <p>{props.description}</p>
              </WorkshopDescriptionDiv>
              <CTAButton>Book a Seat NOW!</CTAButton>
            </InfoDiv>
          </Container>
        </>
      )}
    </>
  );
}

export default CircleElement;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & > div {
    width: 90%;
  }
`;

const HoverDiv = styled.div`
  opacity: 0;
  color: white;
  position: absolute;
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
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(0.75rem, 1.5vmin, 1.45rem);
  transition: all 0.8s ease;
  cursor: pointer;
  height: 100%;
  background-color: ${CONSTANTS.purpleActive};
  z-index: 3;

  &.desktop {
    position: absolute;
  }

  &.mobile {
    aspect-ratio: 1 / 1;
    max-height: 42.7%;
  }

  /* &[data-index="0"] { */
  &.leftInactive,
  &.zero {
    height: 48%;
    width: 17.1%;
    z-index: 1;
    top: 50%;
    /* right: 84%; */
    /* translate: 25% -50%; */
    left: 0;
    translate: 14% -50%;
    background-color: ${CONSTANTS.purpleInactive};
  }

  /* &[data-index="1"] { */
  &.leftSemiActive,
  &.one {
    height: 75%;
    width: 26.78%;
    z-index: 2;
    top: 50%;
    /* right: 70%;
    translate: 40% -50%; */
    left: 0;
    translate: 50% -50%;
    background-color: ${CONSTANTS.purpleSemiActive};
  }

  /* &[data-index="2"] { */
  &.active,
  &.two {
    /* height: 500px; */
    height: 100%;
    width: 35.71%;
    background-color: ${CONSTANTS.purpleActive};
    z-index: 3;
    top: 0;
    left: 50%;
    translate: -50% 0%;
  }

  /* &[data-index="3"] { */
  &.rightSemiActive,
  &.three {
    height: 75%;
    width: 26.78%;
    z-index: 2;
    top: 50%;
    left: 70%;
    translate: -40% -50%;
    background-color: ${CONSTANTS.purpleSemiActive};
  }

  /* &[data-index="4"] { */
  &.rightInactive,
  &.four {
    height: 48%;
    width: 17.1%;
    z-index: 1;
    top: 50%;
    left: 84%;
    translate: -25% -50%;
    background-color: ${CONSTANTS.purpleInactive};
  }

  & img {
    height: 90%;
    width: 90%;
    object-fit: contain;
    transition: all 0.5s ease;
  }

  &.two:hover {
    transform: scale(1.1);
    transform-origin: center;
    transition: all 0.5s ease;
  }

  &.two:hover img,
  &.mobile:hover img {
    opacity: 0.5;
    transition: all 0.5s ease;
  }

  &.two:hover ${HoverDiv}, &.mobile:hover ${HoverDiv} {
    opacity: 1;
    transition: all 0.5s ease;
    cursor: default;
  }
`;

const WorkshopDescriptionDiv = styled.div`
  width: 80%;
`;

const CTAButton = styled.button`
  width: 224px;
  cursor: pointer;
  text-align: center;
  padding: 10px;
  background-color: ${CONSTANTS.yellow};
  color: black;
  border-radius: 32px;
  border: none;
  font-size: 18px;
  margin: 1rem auto 0;
`;
