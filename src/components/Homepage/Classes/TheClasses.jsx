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

function TheClasses() {
  return (
    <Section>
      <EngArTitle
        english={"Classes"}
        arabic={"يلا عالصف"}
        bottom={"-50%"}
        right={"-114%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>
        <Arrow className="left" src={ArrowLeft} />
        <CardWrapper>
          <Card
            classTitle="Chocolate Cake Recipe"
            imagesrc={cake1}
            number="10"
            classDur="30"
            descr=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated."
          />
          <Card
            classTitle="Chocolate Ganache"
            imagesrc={cake2}
            number="10"
            classDur="30"
            descr="This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... "
          />
          <Card
            classTitle="Sugar Fondant"
            imagesrc={cake3}
            number="10"
            classDur="30"
            descr=" This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... "
          />
        </CardWrapper>
        <Arrow className="right" src={ArrowRight} />
      </ContentDiv>
    </Section>
  );
}

export default TheClasses;

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
`;