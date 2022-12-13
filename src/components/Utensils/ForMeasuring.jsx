import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components";
import Card from "./CardUtensils";
import CakeRuler from "../../designAssets/UtensilsPage/ForMeasuring/CakeRuler.png";
import MeasuringSpoons from "../../designAssets/UtensilsPage/ForMeasuring/MeasuringSpoons.png";
import MeasuringCups from "../../designAssets/UtensilsPage/ForMeasuring/MeasuringCups.png";
import { Link } from "react-router-dom";

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
        <Link to="/utensil/1" style={styles.Link}>
          <Card
            cardBgColor="pink"
            src={MeasuringSpoons}
            classTitle="Measuring Spoons"
            Description=" Stainless steel hand & rubber head "
            Set=" 4"
            price="40"
          />
        </Link>
        <Link to="/utensil/2" style={styles.Link}>
          <Card
            src={MeasuringCups}
            classTitle="Measuring Cups"
            Description="Stainless steel hand & rubber head"
            Set=" 5"
            price="25"
          />
        </Link>
        <Link to="/utensil/3" style={styles.Link}>
          <Card
            src={CakeRuler}
            classTitle="CakeRuler"
            Description=" Plastic-Unit in CMs"
            Set=" 4"
            price="36"
          />
        </Link>
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

const styles = {
  Link: {
    textDecoration: "none",
  },
};