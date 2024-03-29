import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components/macro";
import Card from "./CardUtensils";
import scraper from "../../designAssets/Utensils/ForCoverage/scraper.png";
import spatula from "../../designAssets/Utensils/ForCoverage/spatula.png";
import whisk from "../../designAssets/Utensils/ForCoverage/whisk.png";

function ForCoverage(props) {
  return (
    <Section>
      <EngArTitle
        english={"For Coverage"}
        arabic={"متل الكوي والمسح والتعزيل"}
        bottom={"-75%"}
        right={"-155%"}
        arColor={CONSTANTS.blue}
      />
      <ContentDiv>
        <Card
          id="15"
          cardBgColor={props.cardBgColor}
          src={scraper}
          classTitle="Scraper"
          Description=" Stainless steel "
          Set="4"
          price="40"
        />
        <Card
          id="14"
          cardBgColor={props.cardBgColor}
          src={spatula}
          classTitle="Spatula"
          Description="Stainless steel"
          Set="5"
          price="25"
        />
        <Card
          id="13"
          cardBgColor={props.cardBgColor}
          src={whisk}
          classTitle="Whisk"
          Description="Stainless steel"
          Set="4"
          price="36"
        />
      </ContentDiv>
    </Section>
  );
}

export default ForCoverage;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`;
