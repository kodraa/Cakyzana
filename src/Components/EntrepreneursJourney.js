import React from "react";
import "../index.css";
import styled from "styled-components";
import { CONSTANTS } from "./../global";
import EngArTitle from "./globalComponents/EngArTitle";
import Section from "./globalComponents/Section";

const Container = styled.div`
  margin-top: 20px;
  margin-left: 90px;
  margin-right: 90px;
  font-size: 30px;
`;

const CoreDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  display: inline-block;
  width: 300px;
  height: 300px;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 50%;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

const CircularDiv = styled.div`
  display: inline-block;
  width: 300px;
  height: 300px;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  text-align: center;

  transform: translate(0%);
  transition: 1s ease;

  &:hover ${Image} {
    transition: 1s ease;
    opacity: 0.3;
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

function EntrepreneursJourney() {
  return (
    <Section>
      <EngArTitle
        english={"Entrepreneurs Journey"}
        arabic={"يلَا خود أوَل خطوة"}
        bottom={"-95%"}
        right={"-50%"}
        arColor={CONSTANTS.yellow}
      />
      <CoreDiv>
        <CircularDiv>
          <Image animated src="../Images/logo192.png"></Image>

          <Text>Lorem Ipsum is simply dummy text of the printing</Text>
        </CircularDiv>

        <CircularDiv>
          <Image animated src="../Images/logo192.png"></Image>
          <Text>Lorem Ipsum is simply dummy text of the printing</Text>
        </CircularDiv>

        <CircularDiv>
          <Image animated src="../Images/logo192.png"></Image>
          <Text>Lorem Ipsum is simply dummy text of the printing</Text>
        </CircularDiv>
      </CoreDiv>
    </Section>
  );
}

export default EntrepreneursJourney;
