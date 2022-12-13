import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components";
import Card from "./CardUtensils";
import PipingHeadsSet1 from "../../designAssets/UtensilsPage/ForPiping/PipingHeadsSet1.png";
import PipingHeadsSet2 from "../../designAssets/UtensilsPage/ForPiping/PipingHeadsSet2.png";
import PipingBag from "../../designAssets/UtensilsPage/ForPiping/PipingBag.png";
import { useParams, Link } from "react-router-dom";

function ForPiping() {
  //get id from card and link page to it

  const params = useParams();
  const id = params.id;

  return (
    <Section>
      <EngArTitle
        english={" For Piping"}
        arabic={"للتزين يا عيني "}
        bottom={"-60%"}
        right={"-85%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>
        <Link to="/utensil/7" style={styles.Link}>
          <Card
            cardBgColor="pink"
            src={PipingHeadsSet1}
            classTitle="Piping HeadsSet 1"
            Description=" Stainless steel "
            Set=" 4"
            price="40"
          />
        </Link>
        <Link to="/utensil/8" style={styles.Link}>
          <Card
            src={PipingHeadsSet2}
            classTitle="Piping HeadsSet 2"
            Description="Small stainless steel "
            Set=" 5"
            price="25"
          />
        </Link>
        <Link to="/utensil/9" style={styles.Link}>
          <Card
            src={PipingBag}
            classTitle="Piping Bag"
            Description="Washable Bags"
            Set=" 4"
            price="36"
          />
        </Link>
      </ContentDiv>
    </Section>
  );
}

export default ForPiping;

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