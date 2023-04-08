import React, { useCallback, useRef, useState } from "react";
import { CONSTANTS, BasicContentDiv } from "../../../global";
import EngArTitle from "../../globalComponents/EngArTitle";
import Section from "../../globalComponents/Section";
import CircleElement from "./CircleElement";
import styled from "styled-components/macro";
import cake1 from "../../../designAssets/Homepage/ThisMonth/cake1.png";
import cake2 from "../../../designAssets/Homepage/ThisMonth/cake2.png";
import cake3 from "../../../designAssets/Homepage/ThisMonth/cake3.png";
import cake4 from "../../../designAssets/Homepage/ThisMonth/cake4.png";
import cake5 from "../../../designAssets/Homepage/ThisMonth/cake5.png";
import ArrowLeft from "../../../designAssets/Homepage/ThisMonth/ArrowLeft.png";
import ArrowRight from "../../../designAssets/Homepage/ThisMonth/ArrowRight.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function ThisMonth(props) {
  const [counter0, setCounter0] = useState(0);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(2);
  const [counter3, setCounter3] = useState(3);
  const [counter4, setCounter4] = useState(4);

  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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

  // todo make workshops dynamic, have an attribute in its table that says if it's featured or not

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
        {window.innerWidth < 768 ? (
          <>
            <Arrow className="left-arrow" src={ArrowLeft} />
            <Swiper
              className="global-swiper"
              ref={sliderRef}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              // slidesPerView="auto"
              // slidesPerView={3}
              slidesPerView={1}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
                // modifier: 1,
              }}
              navigation={{
                nextEl: ".right-arrow",
                prevEl: ".left-arrow",
                clickable: true,
              }}
              modules={[Navigation, EffectCoverflow]}
            >
              <SwiperSlide>
                <CircleElement src={cake1} />
              </SwiperSlide>
              <SwiperSlide>
                <CircleElement src={cake2} />
              </SwiperSlide>
              <SwiperSlide>
                <CircleElement src={cake3} />
              </SwiperSlide>
              <SwiperSlide>
                <CircleElement src={cake4} />
              </SwiperSlide>
              <SwiperSlide>
                <CircleElement src={cake5} />
              </SwiperSlide>
            </Swiper>
            <Arrow className="right-arrow" src={ArrowRight} />
          </>
        ) : (
          <>
            <Arrow src={ArrowLeft} onClick={() => handleCounter("minus")} />
            <CircleCarouselContainer key={1001}>
              <CircleElement src={cake1} index={counter0} />
              <CircleElement src={cake2} index={counter1} />
              <CircleElement src={cake3} index={counter2} />
              <CircleElement src={cake4} index={counter3} />
              <CircleElement src={cake5} index={counter4} />
            </CircleCarouselContainer>
            <Arrow src={ArrowRight} onClick={() => handleCounter("plus")} />
          </>
        )}
      </ContentDiv>
    </Section>
  );
}

export default ThisMonth;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;

  & .global-swiper,
  & .swiper {
    height: 90%;
    background-color: transparent !important;

    /* height: 85.02%; */
    /* height: 100px; */
    /* width: 100%; */
    /* background-color: red; */
  }

  & .swiper-wrapper {
    background-color: transparent !important;
  }

  & .swiper-slide {
    height: 100% !important;
    background-color: transparent !important;
  }
`;

const CircleCarouselContainer = styled.div`
  /* height: 500px; */
  /* width: 100%; */
  display: flex;
  align-items: center;
  /* justify-content: center;
  -webkit-justify-content: space-between; */
  height: 62.8%;
  width: 96%;
  position: relative;

  & .left-arrow,
  & .right-arrow {
    width: 25px;
    cursor: pointer;
  }
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
