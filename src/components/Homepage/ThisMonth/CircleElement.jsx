import React, { useState } from "react";
import styled from "styled-components";
import { CONSTANTS } from "../../../global";

function CircleElement(props) {

  const translation = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four'   
  }


  return (
    // <Circle className={props.class}>
    <Circle className={translation[props.index]}>
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
            In this workshop you will be learning how to bake a cake and how to
            cover it with sugar dough, in addition to 3d techniques and drawing
            a 2D character on a sugar dough.
          </p>
        </WorkshopDescriptionDiv>
        <CTAButton>Book a Seat NOW!</CTAButton>
      </HoverDiv>
    </Circle>
  );
}

export default CircleElement;

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
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;

  /* &[data-index="0"] { */
  &.leftInactive, &.zero {
    height: 210px;
    z-index: 1;
    top: 50%;
    right: 75%;
    translate: 25% -50%;
    background-color: ${CONSTANTS.purpleInactive};
  }

  /* &[data-index="1"] { */
  &.leftSemiActive, &.one {
    height: 320px;
    z-index: 2;
    top: 50%;
    right: 65%;
    translate: 40% -50%;
    background-color: ${CONSTANTS.purpleSemiActive};
  }

  /* &[data-index="2"] { */
  &.active, &.two {
    height: 433px;
    background-color: ${CONSTANTS.purpleActive};
    z-index: 3;
    left: 50%;
    translate: -50%;
  }

  /* &[data-index="3"] { */
  &.rightSemiActive, &.three {
    height: 320px;
    z-index: 2;
    top: 50%;
    left: 65%;
    translate: -40% -50%;
    background-color: ${CONSTANTS.purpleSemiActive};
  }

  /* &[data-index="4"] { */
  &.rightInactive, &.four {
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

  &.two:hover {
    transform: scale(1.1);
    transform-origin: center;
    transition: all 0.5s ease;
  }

  &.two:hover img {
    opacity: 0.5;
    transition: all 0.5s ease;
  }

  &.two:hover ${HoverDiv} {
    opacity: 1;
    transition: all 0.5s ease;
    cursor: default;
  }
`;

const WorkshopDescriptionDiv = styled.div`
  width: 80%;
`;

const CTAButton = styled.button`
  background-color: ${CONSTANTS.yellow};
`;
