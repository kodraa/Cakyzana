import React, { useEffect, useRef, useState } from "react";
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

  // let [counter, setCounter] = useState(0);
  
  const [counter0, setCounter0] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  const handleCounter = (counter, setCounter) => {
    // if number is less than 4, increment state variable
    // if number+1 is 4, set state variable to 0

    if (counter < 4) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
    console.log(counter)
  }

  return (
    <Section>
    <button onClick={() => setCounter0(counter0-1)}>minus</button>
      <EngArTitle
        english={"This Month"}
        arabic={"اللي سبق شم الحبق"}
        bottom={"-95%"}
        right={"-120%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>      
        <CircleCarouselContainer key={1001}>          
          <CircleElement src={cake1} index={counter0} 
            key={1002}
          />
          <CircleElement src={cake2} index={counter0+1} />
          <CircleElement src={cake3} index={counter0+2} />
          <CircleElement src={cake4} index={counter0+3} />
          <CircleElement src={cake5} index={counter0+4} />
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

