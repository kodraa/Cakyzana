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
import ArrowRight from "../../../designAssets/Homepage/Classes/ArrowRight.png";
import ArrowLeft from "../../../designAssets/Homepage/Classes/ArrowLeft.png";
import Carousel from "react-elastic-carousel";





function TheClasses() {
  return (
    <Section >
      <EngArTitle
        english={"Classes"}
        arabic={"يلا عالصف"}
        bottom={"-50%"}
        right={"-114%"}
        arColor={CONSTANTS.pink}
      />
      
      <ContentDiv>
      
        
        <CardWrapper>
        <Carousel>
        <CarouselContainer>
        <Holder>
          <Card
            classTitle="Chocolate Cake Recipe"
            imagesrc={cake1}
            number="10"
            classDur="30"
            descr=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated."
          />
          </Holder>
          <Holder>

          <Card
            classTitle="Chocolate Ganache"
            imagesrc={cake2}
            number="10"
            classDur="30"
            descr="This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... "
          />
       </Holder>
       <Holder>
          <Card
            classTitle="Sugar Fondant"
            imagesrc={cake3}
            number="10"
            classDur="30"
            descr=" This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... "
          />
          </Holder>
          </CarouselContainer>

          <CarouselContainer>
          <Holder>
          <Item imagesrc={cake4}/>
          </Holder>
          <Holder>
          <Item imagesrc={cake5}/>
          </Holder>
          </CarouselContainer>
          </Carousel>

        </CardWrapper>

        
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

const VideoHolder = styled.div`
  min-width: 31%;
  height: 100%;
  border-radius: 10px;
`;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;


const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;