import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components";
import Card from "./CardUtensils";
import CakeRuler from "../../designAssets/Utensils/ForMeasuring/CakeRuler.png";
import MeasuringSpoons from "../../designAssets/Utensils/ForMeasuring/MeasuringSpoons.png";
import MeasuringCups from "../../designAssets/Utensils/ForMeasuring/MeasuringCups.png";


function ForMeasuring() {
  return (
    <Section>
      <EngArTitle
        english={"For Measuring"}
        arabic={"عالعيار او بتخبص"}
        bottom={"-60%"}
        right={"-85%"}
        arColor={CONSTANTS.blue}
      />
      <ContentDiv>
          <Card
            cardBgColor="pink"
            src={MeasuringSpoons}
            classTitle="Measuring Spoons"
            Description=" Stainless steel hand & rubber head "
            Set=" 4"
            price="40"
            id="1"
          />
          <Card
            src={MeasuringCups}
            classTitle="Measuring Cups"
            Description="Stainless steel hand & rubber head"
            Set=" 5"
            price="25"
            id="2"
          />
          <Card
            src={CakeRuler}
            classTitle="CakeRuler"
            Description=" Plastic-Unit in CMs"
            Set=" 4"
            price="36"
            id="3"
          />
      </ContentDiv>
    </Section>
  );
}

export default ForMeasuring;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

