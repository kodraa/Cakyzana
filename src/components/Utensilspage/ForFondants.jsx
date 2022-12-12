import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components";
import Card from "./CardUtensils";
import ModelingPensSet1 from "../../designAssets/UtensilsPage/ForFondants/ModelingPensSet1.png";
import ModelingPensSet2 from "../../designAssets/UtensilsPage/ForFondants/ModelingPensSet2.png";
import ModelingPensSet3 from "../../designAssets/UtensilsPage/ForFondants/ModelingPensSet3.png";
import { Link } from "react-router-dom";

function ForFondants() {
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
        <Link to="/utensil/4" style={styles.Link}>
          <Card
            src={ModelingPensSet1}
            classTitle="Modeling Pens Set 1"
            Description=" Stainless steel "
            Set=" 4"
            price="40"
          />
        </Link>
        <Link to="/utensil/5" style={styles.Link}>
          <Card
            src={ModelingPensSet2}
            classTitle="Modeling Pens Set 2"
            Description="Small stainless steel ball and rubber headed pens"
            Set=" 5"
            price="25"
          />
        </Link>
        <Link to="/utensil/6" style={styles.Link}>
          <Card
            src={ModelingPensSet3}
            classTitle="Modeling Pens Set 3"
            Description="Wood random shapes modeling pen"
            Set=" 4"
            price="36"
          />
        </Link>
      </ContentDiv>
    </Section>
  );
}

export default ForFondants;

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
