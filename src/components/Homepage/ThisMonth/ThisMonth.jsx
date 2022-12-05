import React, { useState } from "react";
import { CONSTANTS, BasicContentDiv } from "../../../global";
import EngArTitle from "../../globalComponents/EngArTitle";
import Section from "../../globalComponents/Section";
import styled from "styled-components";
import cake1 from "../../../designAssets/Homepage/ThisMonth/cake1.png";
import cake2 from "../../../designAssets/Homepage/ThisMonth/cake2.png";
import cake3 from "../../../designAssets/Homepage/ThisMonth/cake3.png";
import cake4 from "../../../designAssets/Homepage/ThisMonth/cake4.png";
import cake5 from "../../../designAssets/Homepage/ThisMonth/cake5.png";
import CircleElement from "./CircleElement";

function ThisMonth() {

  const [counter, setCounter] = useState(0);

  return (
    <Section>
    {/* <button onClick={() => setCounter(counter-1)}>minus</button> */}
      <EngArTitle
        english={"This Month"}
        arabic={"اللي سبق شم الحبق"}
        bottom={"-95%"}
        right={"-120%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>      
        <CircleCarouselContainer key={1001}>          
          <CircleElement src={cake1} index={counter} 
            key={1002}
          />
          <CircleElement src={cake2} index={counter+1} />
          <CircleElement src={cake3} index={counter+2} />
          <CircleElement src={cake4} index={counter+3} />
          <CircleElement src={cake5} index={counter+4} />
        </CircleCarouselContainer>
      </ContentDiv>
    </Section>
  );
}

export default ThisMonth;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
`;

const CircleCarouselContainer = styled.div`
  height: 433px;
  width: 100%;
  position: relative;
`;

