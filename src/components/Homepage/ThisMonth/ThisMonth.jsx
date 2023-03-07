import React, { useState } from "react";
import { CONSTANTS, BasicContentDiv } from "../../../global";
import EngArTitle from "../../globalComponents/EngArTitle";
import Section from "../../globalComponents/Section";
import CircleElement from "./CircleElement";
import styled from "styled-components";
import cake1 from "../../../designAssets/Homepage/ThisMonth/cake1.png";
import cake2 from "../../../designAssets/Homepage/ThisMonth/cake2.png";
import cake3 from "../../../designAssets/Homepage/ThisMonth/cake3.png";
import cake4 from "../../../designAssets/Homepage/ThisMonth/cake4.png";
import cake5 from "../../../designAssets/Homepage/ThisMonth/cake5.png";
import ArrowLeft from "../../../designAssets/Homepage/ThisMonth/ArrowLeft.png";
import ArrowRight from "../../../designAssets/Homepage/ThisMonth/ArrowRight.png";

function ThisMonth(props) {
  const [counter0, setCounter0] = useState(0);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(2);
  const [counter3, setCounter3] = useState(3);
  const [counter4, setCounter4] = useState(4);

  const handleCounter = (func) => {
    if (func === "minus") {
      setCounter0(counter0 - 1);
      setCounter1(counter1 - 1);
      setCounter2(counter2 - 1);
      setCounter3(counter3 - 1);
      setCounter4(counter4 - 1);
      // if any counter is zero, set it to 4
      if (counter0 === 0) {
        setCounter0(4);
      }
      if (counter1 === 0) {
        setCounter1(4);
      }
      if (counter2 === 0) {
        setCounter2(4);
      }
      if (counter3 === 0) {
        setCounter3(4);
      }
      if (counter4 === 0) {
        setCounter4(4);
      }
    } else if (func === "plus") {
      setCounter0(counter0 + 1);
      setCounter1(counter1 + 1);
      setCounter2(counter2 + 1);
      setCounter3(counter3 + 1);
      setCounter4(counter4 + 1);
      // if any counter is 4, set it to 0
      if (counter0 === 4) {
        setCounter0(0);
      }
      if (counter1 === 4) {
        setCounter1(0);
      }
      if (counter2 === 4) {
        setCounter2(0);
      }
      if (counter3 === 4) {
        setCounter3(0);
      }
      if (counter4 === 4) {
        setCounter4(0);
      }
    }
  };

  return (
    <Section isGrey={props.isGrey}>
      {/* <button onClick={() => setCounter(counter-1)}>minus</button> */}
      <EngArTitle
        english={"This Month"}
        arabic={"اللي سبق شم الحبق"}
        bottom={"-65%"}
        right={"-90%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>
        <Arrow src={ArrowLeft} onClick={() => handleCounter("minus")} />
        <CircleCarouselContainer key={1001}>
          <CircleElement src={cake1} index={counter0} />
          <CircleElement src={cake2} index={counter1} />
          <CircleElement src={cake3} index={counter2} />
          <CircleElement src={cake4} index={counter3} />
          <CircleElement src={cake5} index={counter4} />
        </CircleCarouselContainer>
        <Arrow src={ArrowRight} onClick={() => handleCounter("plus")} />
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
  /* height: 500px; */
  height: 62.8%;
  width: 100%;
  position: relative;
`;

const Arrow = styled.img`
  width: 25px;
  /* top: 50%; */
  /* position: absolute; */
  /* transform: translateY(-50%); */
  cursor: pointer;

  &.left {
    /* left: 0; */
  }

  &.right {
    /* right: 0; */
  }
`;
