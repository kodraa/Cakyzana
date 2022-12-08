import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../../global";
import EngArTitle from "../../globalComponents/EngArTitle";
import Section from "../../globalComponents/Section";
import styled from "styled-components";
import Card from "./CardTheStars";
function EducateSection(props) {
  return (
    <Section isGrey={props.isGrey}>
      <EngArTitle
        english={"The Stars"}
        arabic={"محبوبين الجماهير"}
        bottom={"-50%"}
        right={"-152%"}
        arColor={CONSTANTS.blue}
      />
      <ContentDiv>
        <Card classTitle="Canvas Your Cake" classDur="75" price="40"/>
        <Card classTitle="Cristal Effect" classDur="50" price="25"/>
        <Card classTitle="Space Effect" classDur="30" price="36"/>
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
`;
