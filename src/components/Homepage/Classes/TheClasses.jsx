import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../../global";
import EngArTitle from "../../globalComponents/EngArTitle";
import Section from "../../globalComponents/Section";
import styled from "styled-components";
import Card from "./Card";
import cake1 from "../../../designAssets/Homepage/Classes/pic1.png";
import cake2 from "../../../designAssets/Homepage/Classes/pic2.png";
import cake3 from "../../../designAssets/Homepage/Classes/pic3.png";
import cake4 from "../../../designAssets/Homepage/Classes/pic4.png";
import cake5 from "../../../designAssets/Homepage/Classes/pic5.png";
import video1 from "../../../designAssets/Homepage/Educate/video1.png";
import video2 from "../../../designAssets/Homepage/Educate/video2.png";
import video3 from "../../../designAssets/Homepage/Educate/video3.png";
import Carousel from "react-elastic-carousel";

function TheClasses(props) {
  return (
    <Section isGrey={props.grey}>
      <EngArTitle
        english={"Classes"}
        arabic={"يلا عالصف"}
        bottom={"-50%"}
        right={"-114%"}
        arColor={CONSTANTS.pink}
      />

      <ContentDiv>
        <Carousel>

          <VideoCarouselContainer>
            <ImgHolder>
              <Image src={video1}></Image>
            </ImgHolder>

            <ImgHolder>
              <Image src={video2}></Image>
            </ImgHolder>

            <ImgHolder>
              <Image src={video3}></Image>
            </ImgHolder>
          </VideoCarouselContainer>

          <VideoCarouselContainer>
            <ImgHolder>
              <Image src={video1}></Image>
            </ImgHolder>

            <ImgHolder>
              <Image src={video2}></Image>
            </ImgHolder>

            <ImgHolder>
              <Image src={video3}></Image>
            </ImgHolder>
          </VideoCarouselContainer>

        </Carousel>
      </ContentDiv>
    </Section>
  );
}

export default TheClasses;

const VideoCarouselContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;

const ImgHolder = styled.div`
  min-width: 31%;
  height: 100%;
  border-radius: 10px;
`;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
`;

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
