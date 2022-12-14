import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components";
import ArrowLeft from "../../designAssets/Homepage/ThisMonth/ArrowLeft.png";
import ArrowRight from "../../designAssets/Homepage/ThisMonth/ArrowRight.png";
import video1 from "../../designAssets/Homepage/Educate/video1.png";
import video2 from "../../designAssets/Homepage/Educate/video2.png";
import video3 from "../../designAssets/Homepage/Educate/video3.png";
import Carousel, { consts } from "react-elastic-carousel";

function EducateSection(props) {
  return (
    <Section isGrey={props.grey}>
      <EngArTitle
        english={"Educate"}
        arabic={"ثقافة كايكية"}
        bottom={"-75%"}
        right={"-100%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>
        <Carousel renderArrow={myArrow}>
          <VideoCarouselContainer>
            <VideoHolder>
              <Image src={video1}></Image>
            </VideoHolder>

            <VideoHolder>
              <Image src={video2}></Image>
            </VideoHolder>

            <VideoHolder>
              <Image src={video3}></Image>
            </VideoHolder>
          </VideoCarouselContainer>

          <VideoCarouselContainer>
            <VideoHolder>
              <Image src={video1}></Image>
            </VideoHolder>

            <VideoHolder>
              <Image src={video2}></Image>
            </VideoHolder>

            <VideoHolder>
              <Image src={video3}></Image>
            </VideoHolder>
          </VideoCarouselContainer>
        </Carousel>
      </ContentDiv>
    </Section>
  );
}

export default EducateSection;

function myArrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? ArrowLeft : ArrowRight;
  return (
    <img
      src={pointer}
      onClick={onClick}
      disabled={isEdge}
      style={{ width: "25px", height: "40px", cursor: "pointer", alignSelf: "center" }}
      alt="arrow"
    />
  );
}

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;

  & .rec-arrow {
    border: none !important;
    outline: none !important;
    background: none;
  }

  & .rec-dot {
    display: none;
  }
`;

const VideoCarouselContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoHolder = styled.div`
  min-width: 31%;
  height: 100%;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
