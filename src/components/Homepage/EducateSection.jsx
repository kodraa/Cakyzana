import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components";
import video1 from "../../designAssets/Homepage/Educate/video1.png";
import video2 from "../../designAssets/Homepage/Educate/video2.png";
import video3 from "../../designAssets/Homepage/Educate/video3.png";
import ArrowRight from "../../designAssets/Homepage/Educate/ArrowRight.png";
import ArrowLeft from "../../designAssets/Homepage/Educate/ArrowLeft.png";

function EducateSection() {
  return (
    <Section>
      <EngArTitle
        english={"Educate"}
        arabic={"ثقافة كايكية"}
        bottom={"-75%"}
        right={"-100%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>

        <VideoCarouselContainer>
        <Arrow className="left" src={ArrowLeft} alt="" />

          <VideoHolder>
            <Image src={video1} alt="" />
          </VideoHolder>

          <VideoHolder>
            <Image src={video2} alt="" />
          </VideoHolder>

          <VideoHolder>
            <Image src={video3} alt="" />
          </VideoHolder>

        <Arrow className="right" src={ArrowRight} alt="" />
        </VideoCarouselContainer>

      </ContentDiv>
    </Section>
  )
}

export default EducateSection

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  `

const VideoCarouselContainer = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;  
    position: relative;
  `
const VideoHolder = styled.div`
  min-width: 31%;
  height: 100%;
  border-radius: 10px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const Arrow = styled.img`
  width: 25px;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  cursor: pointer;

  &.left{
    left: 0;
  }

  &.right{
    right: 0;
  }
`