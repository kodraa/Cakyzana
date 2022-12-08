import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components";
import Card from "./CardUtensils";
import CircleCakeTray from "../../designAssets/UtensilsPage/ForCakes/CircleCakeTray.png";
import SquareCakeTray from "../../designAssets/UtensilsPage/ForCakes/SquareCakeTray.png";
import TableTurner from "../../designAssets/UtensilsPage/ForCakes/TableTurner.png";

function ForCakes() {
  return (
    <Section>
      <EngArTitle
        english={"For Cakes"}
        arabic={"الشكل تحت السيطرة"}
        bottom={"-75%"}
        right={"-155%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>
        <Card  cardBgColor="pink" src={CircleCakeTray} classTitle="Circle Cake Tray" Description=" Ceramic " Set=" 4" price="40"/>
        <Card src={SquareCakeTray} classTitle="Square Cake Tray" Description=" Carbon steel" Set=" 5" price="25"/>
        <Card src={TableTurner} classTitle="Table Turner" Description=" Carbon steel" Set=" 4" price="36"/>
      </ContentDiv>
    </Section>
  );
}

export default ForCakes;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
