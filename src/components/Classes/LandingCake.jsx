import React from "react";
import styled from "styled-components/macro";
import { BasicLandingSection, CONSTANTS } from "../../global";
import Cake1 from "../../designAssets/Classes/Landing/Cake1.png";
import { Link } from "react-router-dom";

function LandingCake(props) {
  return (
    <ContentContainer>
      <LeftChild>
        <Header>
          <Title>
            <Bold>{props.Title}</Bold>
          </Title>
          <Subtitle>
            <Bold>{props.Subtitle}</Bold>
          </Subtitle>
        </Header>
        <Description>
          <DescriptionText>
            <Bold>Date: </Bold>
            {props.Date}
          </DescriptionText>
          <DescriptionText>
            <Bold>Time: </Bold>
            {props.Time}
          </DescriptionText>
          <DescriptionText>
            <Bold>Place: </Bold>
            {props.Place}
          </DescriptionText>
          <DescriptionText>
            <Bold>Workshop Fees: </Bold>
            {props.WorkshopFees}
          </DescriptionText>
        </Description>
        <CTAButton to={"/workshopform"}>
          <Bold>Book a seat NOW!</Bold>
        </CTAButton>
      </LeftChild>
      <RightChild>
        <Img src={Cake1} />
        {/* <Img src={props.image} /> */}
      </RightChild>
    </ContentContainer>
  );
}

export default LandingCake;

const ContentContainer = styled(BasicLandingSection)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const FlexChild = styled.div`
  width: 37%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const LeftChild = styled(FlexChild)`
  color: white;
  gap: 4%;
`;

const RightChild = styled(FlexChild)`
  @media (max-width: 768px) {
    order: -1;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Bold = styled.span`
  font-family: "Century Gothic Bold";
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`;

const Title = styled.h2`
  /* font-size: 4rem; */
  font-size: clamp(1.75rem, 5vw, 4rem);
  width: 70%;
`;

const Subtitle = styled.h3`
  /* font-size: 2rem; */
  font-size: clamp(1.5rem, 3vw, 2rem);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`;

const DescriptionText = styled.p`
  /* font-size: 1.75rem; */
  font-size: clamp(1.5rem, 3vw, 1.75rem);
`;

const CTAButton = styled(Link)`
  text-decoration: none;
  width: 200px;
  text-align: center;
  padding: 10px;
  background-color: ${CONSTANTS.yellow};
  color: black;
  border-radius: 32px;
  border: none;
  font-size: 18px;
  margin: 1.2rem 0;
  cursor: pointer;
`;
