import React from "react";
import styled from "styled-components";
import { BasicContentDiv, CONSTANTS } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import beginner from "../../designAssets/Homepage/EntrepreneursJourney/Track1.png";
import intermediate from "../../designAssets/Homepage/EntrepreneursJourney/Track2.png";
import professional from "../../designAssets/Homepage/EntrepreneursJourney/Track3.png";

function EntrepreneursJourney(props) {
  return (
    <Section isGrey={props.isGrey}>
      <EngArTitle
        english={"Entrepreneurs Journey"}
        arabic={"يلَّا خود أوَّل خطوة"}
        bottom={"-90%"}
        right={"-50%"}
        arColor={CONSTANTS.yellow}
      />
      <CoreDiv>
        <ContentWrapper>
          <CircularDiv className="left">
            <Image animated src={beginner}></Image>
            <Text>
              <div>
                <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                  Beginner Level
                </p>
                <br />
                <p style={{ fontSize: "13.5px" }}>
                  <span style={{ fontWeight: "bold" }}>Number of Classes:</span>{" "}
                  12
                </p>
                <p style={{ fontSize: "13.5px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Approximate Class Duration:{" "}
                  </span>
                  30 mins
                </p>
                <br />
                <p style={{ fontSize: "13.5px" }}>
                  Description: In this level you will learn about the basics of
                  baking, cream making, crumb coating, and decorating a cake.
                </p>
                <br />
                <Button>Take Journey</Button>
              </div>
            </Text>
          </CircularDiv>

          <CircularDiv className="middle">
            <Image animated src={intermediate}></Image>
            <Text>
              <div>
                <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                  intermediate Level
                </p>
                <br />
                <p style={{ fontSize: "13.5px" }}>
                  <span style={{ fontWeight: "bold" }}>Number of Classes:</span>{" "}
                  12
                </p>
                <p style={{ fontSize: "13.5px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Approximate Class Duration:{" "}
                  </span>
                  30 mins
                </p>
                <br />
                <p style={{ fontSize: "13.5px" }}>
                  Description: In this level you will learn about the basics of
                  baking, cream making, crumb coating, and decorating a cake.
                </p>
                <br />
                <Button>Take Journey</Button>
              </div>
            </Text>
          </CircularDiv>

          <CircularDiv className="right">
            <Image animated src={professional}></Image>
            <Text>
              <div>
                <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                  Professional Level
                </p>
                <br />
                <p style={{ fontSize: "13.5px" }}>
                  <span style={{ fontWeight: "bold" }}>Number of Classes:</span>{" "}
                  12
                </p>
                <p style={{ fontSize: "13.5px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Approximate Class Duration:{" "}
                  </span>
                  30 mins
                </p>
                <br />
                <p style={{ fontSize: "13.5px" }}>
                  Description: In this level you will learn about the basics of
                  baking, cream making, crumb coating, and decorating a cake.
                </p>
                <br />
                <Button>Take Journey</Button>
              </div>
            </Text>
          </CircularDiv>
        </ContentWrapper>
      </CoreDiv>
    </Section>
  );
}

export default EntrepreneursJourney;

const ContentWrapper = styled.div`
  /* height: 450px; */
  width: 100%;
  height: 56.5%;
  display: flex;
  justify-content: space-between;
  gap: 4%; 
`;

const CoreDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  display: inline-block;
  width: 80%;
  height: 80%;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  // background-position: 50% 50%;
  // background-size: cover;
  // border-radius: 50%;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  color: white;
  width: 70%;
`;

const CircularDiv = styled.div`
  display: flex;
  /* height: 450px; */
  /* flex-basis: 100%; */
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  position: relative;
  text-align: center;
  align-items: center;
  transform: translate(0%);

  &:hover ${Image} {
    transition: 1s ease;
    opacity: 0.3;
    scale: 0.9;
  }

  &.left{
    background-color: ${CONSTANTS.purpleInactive};
  }

  &.middle{
    background-color: ${CONSTANTS.purpleSemiActive};
  }

  &.right{
    background-color: ${CONSTANTS.purpleActive};
  }

  &:not(:hover) ${Image} {
    transition: 1s ease;
  }

  &:hover ${Text} {
    transition: 1s ease;
    opacity: 1;
    cursor: default;
  }

  &:not(:hover) ${Text} {
    transition: 1s ease;
  }
`;

const Button = styled.button`
  background-color: ${CONSTANTS.yellow};
  border: none;
  padding: 5%;
  border-radius: 18px;
  font-weight: bold;
  width: 60%;

  &:hover {
    cursor: pointer;
  }
`;
