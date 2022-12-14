import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components";
import Card from "./CardUtensils";
import ModelingPensSet1 from "../../designAssets/Utensils/ForFondants/ModelingPensSet1.png";
import ModelingPensSet2 from "../../designAssets/Utensils/ForFondants/ModelingPensSet2.png";
import ModelingPensSet3 from "../../designAssets/Utensils/ForFondants/ModelingPensSet3.png";
import { Link } from "react-router-dom";

function ForFondants(props) {
  return (
    <Section>
      <EngArTitle
        english={"For Fondants"}
        arabic={"لعجينة السّكر يا سكّر "}
        bottom={"-85%"}
        right={"-110%"}
        arColor={CONSTANTS.blue}
      />
      <ContentDiv>
        <Card
          isGrey={props.isGrey}
          id="4"
          src={ModelingPensSet1}
          cardBgColor={props.cardBgColor}
          classTitle="Modeling Pens Set 1"
          Description=" Stainless steel "
          Set="4"
          price="40"
        />
        <Card
          id="5"
          src={ModelingPensSet2}
          cardBgColor={props.cardBgColor}
          isPadded={props.isPadded}
          classTitle="Modeling Pens Set 2"
          Description="Small stainless steel ball and rubber headed pens "
         Set="5"
          price="25"
        />
        <Card
          id="6"
          src={ModelingPensSet3}
          cardBgColor={props.cardBgColor}
          classTitle="Modeling Pens Set 3"
          Description="Wood random shapes modeling pen"
          Set="4"
          price="36"
        />
      </ContentDiv>
    </Section>
  );
}

export default ForFondants;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`;
