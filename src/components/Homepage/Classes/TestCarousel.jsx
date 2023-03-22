import React from "react";
import styled from "styled-components/macro";
import { BasicContentDiv, CONSTANTS } from "../../../global";
import EngArTitle from "../../globalComponents/EngArTitle";
import Section from "../../globalComponents/Section";
import cake1 from "../../../designAssets/Homepage/Classes/cake1.png";
import cake2 from "../../../designAssets/Homepage/Classes/cake2.png";
import cake3 from "../../../designAssets/Homepage/Classes/cake3.png";
import cake4 from "../../../designAssets/Homepage/Classes/cake4.png";
import cake5 from "../../../designAssets/Homepage/Classes/cake5.png";
import ArrowRight from "../../../designAssets/Homepage/Classes/ArrowRight.png";
import ArrowLeft from "../../../designAssets/Homepage/Classes/ArrowLeft.png";
import { highlightedClasses } from "../../../data/highlightedClasses";
import DescriptionCard from "../../globalComponents/DescriptonCard";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function ExampleComponent() {
  return (
    <Section isGrey>
      <EngArTitle
        english={"Classes"}
        arabic={"يلا عالصف"}
        bottom={"-50%"}
        right={"-62%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>
        <CardWrapper>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={6}
            visibleSlides={3}
          >
            <ButtonBack><Image src={ArrowLeft}></Image></ButtonBack>
            <Slider>
              <Slide index={0} innerClassName='carousel-slide-style'><Image src={cake1}></Image></Slide>
              <Slide index={1} innerClassName='carousel-slide-style'><Image src={cake2}></Image></Slide>
              <Slide index={2} innerClassName='carousel-slide-style'><Image src={cake3}></Image></Slide>
              <Slide index={3} innerClassName='carousel-slide-style'><Image src={cake4}></Image></Slide>
              <Slide index={4} innerClassName='carousel-slide-style'><Image src={cake5}></Image></Slide>
              <Slide index={5} innerClassName='carousel-slide-style'><Image src={cake5}></Image></Slide>
            </Slider>
            <ButtonNext><Image src={ArrowRight}></Image></ButtonNext>
          </CarouselProvider>
        </CardWrapper>
      </ContentDiv>
    </Section>
  );
}

export default ExampleComponent;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.img`
  width: 25px;
  cursor: pointer;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > .carousel {
    height: 100%;
    width: 100%;
  }

  & > .carousel > .slideInner___2mfX9{
    display: flex;
    justify-content: center;
  }
`;
// We extend the BasicContentDiv with ContentDiv and add display: flex; align-items: center; to center the content vertically in the section
