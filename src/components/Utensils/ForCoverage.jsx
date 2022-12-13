import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components";
import Card from "./CardUtensils";
import scraper from "../../designAssets/UtensilsPage/ForCoverage/scraper.png";
import spatula from "../../designAssets/UtensilsPage/ForCoverage/spatula.png";
import whisk from "../../designAssets/UtensilsPage/ForCoverage/whisk.png";
import { Link } from "react-router-dom";

function ForCoverage() {
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
        <Link to="/utensil/15" style={styles.Link}>
          <Card
            cardBgColor="pink"
            src={scraper}
            classTitle="Scraper"
            Description=" Stainless steel "
            Set=" 4"
            price="40"
          />
        </Link>
        <Link to="/utensil/14" style={styles.Link}>
          <Card
            src={spatula}
            classTitle="Spatula"
            Description="Stainless steel"
            Set=" 5"
            price="25"
          />
        </Link>
        <Link to="/utensil/13" style={styles.Link}>
          <Card
            src={whisk}
            classTitle="Whisk"
            Description="Stainless steel"
            Set=" 4"
            price="36"
          />
        </Link>
      </ContentDiv>
    </Section>
  );
}

export default ForCoverage;

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