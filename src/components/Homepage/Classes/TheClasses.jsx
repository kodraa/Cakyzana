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
import ArrowRight from "../../../designAssets/Homepage/Educate/ArrowRight.png";
import ArrowLeft from "../../../designAssets/Homepage/Educate/ArrowLeft.png";

function EducateSection() {
  return (
    <Section>
      <EngArTitle
        english={"Classes"}
        arabic={"يلا عالصف"}
        bottom={"-75%"}
        right={"-100%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>
        <Card
          classTitle="Chocolate Cake recipe"
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
      </ContentDiv>
    </Section>
  );
}

export default EducateSection;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: ${CONSTANTS.white};
`;

const Arrow = styled.img`
  width: 25px;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  cursor: pointer;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;
