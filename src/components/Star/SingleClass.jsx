import React from "react";
import styled from "styled-components";
import {
  BasicLandingSection,
  CONSTANTS,
  FullScreenSection,
} from "../../global";
import Navbar from "../globalComponents/Navbar";
import Cake from "../../designAssets/Star/Sample Cake.png";

// TODO add black cart logo

function SingleClass() {
  return (
    <FullScreenSection>
      <Navbar />
      <StarFlexContainer>
        <LeftFlexChild>
          <LeftChildImgContainer>
            <Img src={Cake} alt="cake" />
          </LeftChildImgContainer>
        </LeftFlexChild>

        <RightFlexChild>
          <StarTitle>Canvas Your Cake</StarTitle>

          <StarSubtitles>
            <Subtitle>Class Section: Cake Recipes</Subtitle>
            <Subtitle>Class Duration: 75 mins</Subtitle>
          </StarSubtitles>

          <DescriptionContainer>
            <Paragraph>
              Description: This class gives you the real technique of drawing on
              fondant. It includes color combination and character drawing
              technique.
            </Paragraph>
          </DescriptionContainer>

          <ToolsContainer>
            <Paragraph>
              Tools Needed: Brushes, Butter cream, food coloring of your choice,
              coloring tray, fondant, reference image.
            </Paragraph>
          </ToolsContainer>

          <PrerequisitesContainer>
            <Paragraph>
              Prerequisites: Butter cream making class, cream coloring class,
              fondant class.
            </Paragraph>
          </PrerequisitesContainer>

          <CTA>
            <Price>Price: $40</Price>
            <CTABtn>Buy Now!</CTABtn>
          </CTA>
        </RightFlexChild>
      </StarFlexContainer>
    </FullScreenSection>
  );
}

export default SingleClass;

const StarFlexContainer = styled(BasicLandingSection)`
  width: 87%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;

  /* flex direction column on mobile */

  @media (max-width: 768px) {
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
  }
`;

const FlexChild = styled.div`
  /* height: 80%; */
  height: 75%;
  width: 45%;
  display: flex;
`;

const LeftFlexChild = styled(FlexChild)``;

const LeftChildImgContainer = styled.div`
  height: 100%;
  width: 100%;
  /* aspect-ratio: 1/1.033; */
  background-color: ${CONSTANTS.purpleDark};
  border-radius: 36px;
  align-self: center;
  position: relative;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  transform: translateY(10%);
`;

const RightFlexChild = styled(FlexChild)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding-top: 3%;

  & * {
    color: #545454;
    font-weight: 100;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-top: 0;
    justify-content: center;
  }
`;

const StarTitle = styled.h2`
  font-size: 2.2rem;
`;

const StarSubtitles = styled.div`
  font-size: 1.8rem;
`;

const Subtitle = styled.h3`
  font-size: 1.4rem;
`;

const DescriptionContainer = styled.div``;

const ToolsContainer = styled.div``;

const PrerequisitesContainer = styled.div``;

const Paragraph = styled.p`
  font-size: 1.4rem;
  font-weight: lighter !important;
`;

const CTA = styled.div`
  height: 20%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

const Price = styled.p`
  font-size: 1.2rem;
`;

const CTABtn = styled.button`
  width: 200px;
  text-align: center;
  padding: 10px;
  background-color: ${CONSTANTS.blue};
  color: white;
  border-radius: 32px;
  border: none;
  font-size: 1.2rem;
  /* margin-top: 1rem; */
`;
